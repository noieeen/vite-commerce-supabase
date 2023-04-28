import { createApp } from 'vue';
import { inject } from '@vercel/analytics';
import './style.css';
import App from './App.vue';

import { pinia } from '@/store';
import { i18n } from '@/libs/i18n';
import router from './router';

import { useSettingStore } from '@/store/settingStore';
import { useToastStore } from './store/toastStore';
// import {usestore}

createApp(App)
  // centralize state management: pinia
  .use(pinia)
  // localization
  .use(i18n)
  // router: vue-router
  .use(router)
  .mount('#app');

// @vercel/analytics
// inject();
// useSettingStore();
// useToastStore();
