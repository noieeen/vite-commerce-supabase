import { i18n } from '@/libs/i18n';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', {
  // state: () => ({
  //   currentLocale: 'en-US',
  // }),
  // actions: {
  //   // TODO: validate locale
  //   changeLocale(locale: string) {
  //     // change i18n locale
  //     i18n.global.locale = locale;

  //     // update state and local storage setting
  //     this.currentLocale = locale;
  //     localStorage.setItem('setting.currentLocale', locale);
  //   },
  //   setupLocale() {
  //     // load locale and set state
  //     this.currentLocale = localStorage.getItem('setting.currentLocale') || 'th';

  //     // change i18n locale
  //     i18n.global.locale = this.currentLocale;
  //   },
  // },
});

// to add HMR support with vue-cli/webpack, these code must be added to each store file
if (import.meta.webpackHot) import.meta.webpackHot.accept(acceptHMRUpdate(useSettingStore, import.meta.webpackHot));
