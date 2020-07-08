import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import MyanmarMap from "@/components/MyanmarMap.vue";

Vue.config.productionTip = false;
Vue.component("MyanmarMap", MyanmarMap);
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");