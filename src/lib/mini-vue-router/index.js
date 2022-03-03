/*
 * @Date: 2022-03-01 14:20:03
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-03 15:46:38
 */
import { ref, inject } from "vue";
import RouterLink from "./RouterLink.vue";
import RouterView from "./RouterView.vue";

const ROUTER_KEY = "__router__";

const ROUTE_KEY = "__route__";

export function createRouter(options) {
  return new Router(options);
}

export function useRouter() {
  return inject(ROUTER_KEY);
}

export function useRoute() {
  return inject(ROUTE_KEY);
}

export function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener("hashchange", fn);
  }

  function push(path) {
    window.location.hash = path;
  }

  return {
    bindEvents,
    push,
    // replace,
    url: () => window.location.hash.slice(1) || "/",
  };
}

export function createWebHistory() {
  function bindEvents(fn) {
    window.addEventListener("popstate", fn);
  }

  function push(path) {
    window.history.pushState({ path }, "", path);
    // popstate 并不会被触发,需要手动改变 current
    this.current.value = path;
  }

  return {
    bindEvents,
    push,
    // replace,
    url: () => window.location.pathname || "/",
  };
}

class Router {
  constructor(options) {
    this.history = options.history;
    this.routes = options.routes;
    //  按照源码的意思, 应该在 createWebHistory 中创建响应式 location
    this.current = ref(this.history.url());
    this.history.bindEvents(() => {
      this.current.value = this.history.url();
      console.log(this.current.value);
    });
  }

  push(to) {
    this.history.push.call(this, to);
  }

  go(n = 0) {
    window.history.go(n);
  }

  back() {
    window.history.back();
  }

  install(app) {
    app.provide(ROUTER_KEY, this);
    app.provide(ROUTE_KEY, this.routes);
    app.component("router-link", RouterLink);
    app.component("router-view", RouterView);
  }
}
