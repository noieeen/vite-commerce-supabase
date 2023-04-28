import { acceptHMRUpdate, defineStore } from 'pinia';

import useSupabase from '@/libs/supabase';

const { client, signOut, signInWithOtp } = useSupabase();

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
      auth: false,
      user: {}, //JSON.parse(localStorage.getItem('user') != undefined ? localStorage.getItem('user') : '') ||
    },
  getters: {
    isAuth: (state) => state.auth,
    currUser: (state) => {
      state.user;
    },
  },
  actions: {
    async SIGN_OUT() {
      await signOut();
      this.auth = false;
      this.user = {};
    },

    async SIGN_IN_W_OTP(email: string) {
      await signInWithOtp(email);

      // client.auth.getSession().then(({ data }) => {
      //   this.user = data.session;
      // });

      // client.auth.onAuthStateChange((_, _session) => {
      //   this.user = _session;
      // });
    },

    STORE_USER(session: any) {
      this.user = session;
      localStorage.setItem('user', JSON.stringify(session));
    },
  },
});

// to add HMR support with vue-cli/webpack, these code must be added to each store file
if (import.meta.webpackHot) import.meta.webpackHot.accept(acceptHMRUpdate(useAuthStore, import.meta.webpackHot));
