<!--
 * @Date: 2022-03-01 20:12:52
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-03 11:00:59
-->
<template>
  <component :is="component"></component>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from ".";
let router = useRouter();
const component = computed(() => {
  const route = router.routes.find(
    (route) => route.path === router.current.value
  );
  return route ? route.component : null;
});
</script>
