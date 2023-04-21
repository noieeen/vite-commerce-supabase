import { acceptHMRUpdate, defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
});

if (import.meta.webpackHot) import.meta.webpackHot.accept(acceptHMRUpdate(useModalStore, import.meta.webpackHot));
