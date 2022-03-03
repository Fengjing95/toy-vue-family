<!--
 * @Date: 2022-03-01 20:13:03
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2022-03-03 15:58:29
-->
<template>
  <a @click="clickHandler">
    <slot />
  </a>
</template>

<script setup>
import { useRouter } from ".";

// import { defineProps } from "vue";
let props = defineProps({
  to: { type: String, required: true },
  replace: { type: Boolean, default: false },
});

const router = useRouter();

function clickHandler() {
  // if (props.replace) router.replace(props.to);
  // else
  router.push(props.to);
}
</script>
