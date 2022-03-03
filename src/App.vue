<!--
 * @Date: 2022-02-22 08:57:53
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-03 15:58:56
-->
<script setup>
import { useStore } from "./lib/mini-vuex";

const store = useStore();

function clickHandler() {
  store.commit("add");
}

function clickAsync() {
  store.dispatch("asyncAdd");
}
</script>

<template>
  state.count: {{ store.state.count }} <br />
  getters.doubleCount:{{ store.getters.doubleCount }} <br />
  <button @click="clickHandler">add</button>
  <button @click="clickAsync">timer add</button> <br />
  <router-link to="/">home</router-link>|
  <router-link to="/about">about</router-link>
  <router-view />
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
