import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import useSupabase from '@/libs/supabase';
import { ref } from 'vue';
// views

import Landing from '@/views/landing/Landing.vue';
import Auth from '@/views/auth/Auth.vue';
import ProductDetail from '@/views/product/ProductDetail.vue';
import ProductCategory from '@/views/product/ProductCategory.vue';
import Profile from '@/views/profile/Profile.vue';
import NotFound from '@/views/error/NotFound.vue';
import Unauthorized from '@/views/error/Unauthorized.vue';
import Cart from '@/views/cart/Cart.vue';
import Checkout from '@/views/checkout/Checkout.vue';

import Playground from '@/views/playground/Playground.vue';

// admin
import AdminProducts from '@/views/admin/product-management/Products.vue';
import AdminProductDetail from '@/views/admin/product-management/ProductDetail.vue';
import AdminDashboard from '@/views/admin/dashboard/Dashboard.vue';
import AdminUsers from '@/views/admin/user-management/Users.vue';
import AdminUserDetail from '@/views/admin/user-management/UserDetail.vue';
import { Session } from '@supabase/supabase-js';
// import DashboardVue from '@/views/admin/dashboard/Dashboard.vue';

const { client } = useSupabase();

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: Landing,
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing,
  },

  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    meta: { redirectIfLoggedIn: true },
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },

  {
    path: '/products',
    name: 'products',
    component: ProductCategory,
  },

  {
    path: '/product-detail/:productId',
    name: 'product-detail',
    component: ProductDetail,
  },

  {
    path: '/playground',
    name: 'playground',
    component: Playground,
  },

  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound,
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorized,
  },
  // Admin
  {
    path: '/admin',
    name: 'admin',
    component: NotFound,
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: AdminDashboard,
    meta: {
      requiresAdmin: true,
    },
  },

  {
    path: '/admin/products',
    name: 'admin-products',
    component: AdminProducts,
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/product-detail',
    name: 'admin-product-detail',
    component: AdminProductDetail,
    meta: {
      requiresAdmin: true,
    },
  },

  {
    path: '/admin/users',
    name: 'admin-users',
    component: AdminUsers,
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/users',
    name: 'admin-user-detail',
    component: AdminUserDetail,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const requiresAdmin = to.matched.some((x) => x.meta.requiresAdmin);
  const redirectIfLoggedIn = to.matched.some((x) => x.meta.redirectIfLoggedIn);
  const clientSession = ref<Session | null>(null);
  await client.auth.getSession().then(({ data }) => {
    clientSession.value = data.session;
  });
  // console.log('clientSession', clientSession.value);
  if (redirectIfLoggedIn && clientSession.value) {
    next('/');
    // router.push('/');
  } else if (requiresAuth && !clientSession.value) {
    next('/auth');
  } else if (requiresAdmin && !clientSession.value) {
    next('/unauthorized');
  } else if (requiresAdmin && clientSession.value) {
    let { data, error, status } = await client.from('profiles').select('*').eq('id', clientSession.value.user.id).single();
    console.log(data);

    if (error && status !== 406) throw error;

    if (data) {
      if (!data.is_admin) {
        next('/unauthorized');
      }
    }
  }

  console.log('router');

  return next();
});

export default router;
