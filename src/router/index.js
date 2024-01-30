import HomeView from "../views/HomeView.vue";
import { createRouter as _createRouter, createWebHistory } from "vue-router";

export function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: function () {
          return import("../views/AboutView.vue");
        },
      },
    ],
  });
}
