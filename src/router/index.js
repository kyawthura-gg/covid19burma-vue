import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cluster from "../views/Cluster.vue";
import Graphs from "../views/Graphs.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/cluster",
    name: "Cluster",
    component: Cluster
  }, {
    path: "/graphs",
    name: "Graphs",
    component: Graphs
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes
});

export default router;