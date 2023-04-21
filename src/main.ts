import { createApp } from 'vue';
import { inject } from '@vercel/analytics';
import './style.css';
import App from './App.vue';

import router from './router';

createApp(App).use(router).mount('#app');
inject();
