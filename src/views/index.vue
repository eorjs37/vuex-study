<template>
  <h1>index.vue</h1>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      setTimeout(() => {
        store.dispatch("moduleA/someAction", { a: 1 });
      }, 5000);
    });
  },
};
</script>

<style></style>
