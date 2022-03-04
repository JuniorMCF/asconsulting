import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from 'vuex-persistedstate'


import app from "./modules/app"
import home from "./modules/home"
import nosotros from "./modules/nosotros"
import auth from "./modules/auth"

Vue.use(Vuex);



const store = new Vuex.Store({
  strict: true,
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    app: app,
    home: home,
    nosotros: nosotros,
    auth: auth
  }
})


export default store

