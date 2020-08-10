import VueRouter from "vue-router";
import Home from "../Home.vue";
import About from "../About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
