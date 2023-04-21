import { acceptHMRUpdate, defineStore } from 'pinia';

// define store
// see: https://pinia.vuejs.org/core-concepts/
//
// alternative to main store state type, we can also force state type by define the object interface
export interface AuthStoreState {
  auth: boolean;
  user: any; // dynamic object
}

export const useAuthStore = defineStore('auth', {
  // we use <Type>{} to ensure object creation with specify type
  // in this case, <AuthStoreState>{} to ensure state type
  state: () =>
    <AuthStoreState>{
      auth: true,
      user: {},
    },
});

// to add HMR support with vue-cli/webpack, these code must be added to each store file
if (import.meta.webpackHot) import.meta.webpackHot.accept(acceptHMRUpdate(useAuthStore, import.meta.webpackHot));
