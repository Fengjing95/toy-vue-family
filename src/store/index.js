/*
 * @Date: 2022-03-01 14:20:09
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-01 20:34:28
 */
import { createStore } from "../lib/mini-vuex";

const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit("add");
        // commit("add");
      }, 1000);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

export default store;
