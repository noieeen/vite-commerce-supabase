import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
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

// admin
import AdminProducts from '@/views/admin/product-management/Products.vue';
import AdminProductDetail from '@/views/admin/product-management/ProductDetail.vue';
import AdminDashboard from '@/views/admin/dashboard/Dashboard.vue';
import AdminUsers from '@/views/admin/user-management/Users.vue';
import AdminUserDetail from '@/views/admin/user-management/UserDetail.vue';

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
    path: '/product-detail',
    name: 'product-detail',
    component: ProductDetail,
  },

  {
    path: '/profile',
    name: 'profile',
    component: Profile,
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
  },

  {
    path: '/admin/products',
    name: 'admin-products',
    component: AdminProducts,
  },
  {
    path: '/admin/product-detail',
    name: 'admin-product-detail',
    component: AdminProductDetail,
  },

  {
    path: '/admin/users',
    name: 'admin-users',
    component: AdminUsers,
  },
  {
    path: '/admin/users',
    name: 'admin-user-detail',
    component: AdminUserDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
