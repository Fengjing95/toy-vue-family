/*
 * @Date: 2022-03-01 11:26:18
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-03 16:06:06
 */
import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from "../lib/mini-vue-router";
import Home from "../view/MyHome.vue";
import About from "../view/MyAbout.vue";

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;
