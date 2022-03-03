/*
 * @Date: 2022-02-22 08:57:53
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-01 20:28:06
 */
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

createApp(App).use(router).use(store).mount("#app");
