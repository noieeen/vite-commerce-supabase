import { acceptHMRUpdate, defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {});
if (import.meta.webpackHot) import.meta.webpackHot.accept(acceptHMRUpdate(useCartStore, import.meta.webpackHot));
