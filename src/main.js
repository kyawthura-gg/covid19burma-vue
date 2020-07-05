import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// window.$ = window.jQuery = require('./assets/js/jquery.js');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");