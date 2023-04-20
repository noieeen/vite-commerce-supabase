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
import ProductManagement from '@/views/admin/product/ProductManagement.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
