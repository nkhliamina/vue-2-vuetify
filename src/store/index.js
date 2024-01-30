// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import { createStore as _createStore } from "vuex";

export function createStore() {
  return _createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
  });
}
