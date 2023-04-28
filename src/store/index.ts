import { createPinia } from 'pinia';

// create pinia instance, for use in application
// pinia must be created before use its store in any part of the application
// (see: https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications)
export const pinia = createPinia()

// TODO: initialize pinia (e.g. its plugins)

// for store definition or namespace/module like vuex, see each store file in "@/store" folder
// (pinia use store+id to separate store module, unlike vuex that use namespace+nested store module name
// this much more easily to work and maintain with multiple/separate store module)
