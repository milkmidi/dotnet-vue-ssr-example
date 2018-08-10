import Vue from 'vue';
import App from './components/App.vue';
import store from './vuex/store.js';
import router from './router';

const app = new Vue({
  router,
  store,
  render:(h)=>h(App)
  // ...App
});

export { app, router, store };