import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dayTest/day1",
    name: "Day1",
    component: () => import(/* webpackChunkName: "about" */ "../views/dayTest/day1.vue"),
  },
  {
    path: "/dayTest/day2",
    name: "Day2",
    component: () => import(/* webpackChunkName: "about" */ "../views/dayTest/day2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
