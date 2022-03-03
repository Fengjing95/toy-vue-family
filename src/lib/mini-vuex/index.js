/*
 * @Date: 2022-03-01 11:26:13
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-01 19:29:45
 */
import { inject, reactive } from "vue";

// store key 用于注入和取出 store 实例
const STORE_KEY = "__store__";

export function useStore() {
  // 获取 provide() 注入的 store 实例
  return inject(STORE_KEY);
}

// 实例化 store
export function createStore(options) {
  return new Store(options);
}

// Vuex Store 构造函数
class Store {
  constructor(options) {
    this.$options = options;
    // 对 state 的数据进行响应式
    this._state = reactive({ data: options.state });
    // 将 mutations 挂载带 store 实例
    this._mutations = options.mutations;
    // 挂载 getters
    options.getters && this.handleGetters(options.getters);
    // 挂载 actions
    this._actions = options.actions;

    //! 使用箭头函数, 防止调用时 this 改变, commit 同理
    this.dispatch = (type, args) => {
      this._actions[type]({ commit: this.commit, state: this.state }, args);
    };

    // commit 方法
    this.commit = (type, payload) => {
      this._mutations[type](this.state, payload);
    };
  }

  // 绑定 getters, 源码中 getters 相关的放在了 store-util.js 中
  handleGetters(getters) {
    this.getters = {};
    Object.keys(this.$options.getters).forEach((getterKey) => {
      Object.defineProperty(this.getters, getterKey, {
        get: () => getters[getterKey](this.state),
        enumerable: true, // for local getters
      });
    });
  }

  // 读取 state 时返回响应式的数据
  get state() {
    return this._state.data;
  }

  // main.js 中, app.use(store)会调用 install 方法
  // 使用 provide 将 store 实例注入
  install(app) {
    app.provide(STORE_KEY, this);
  }
}
