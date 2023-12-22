<template>
  <div><NavbarShorterComp /> <slot /></div>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

import NavbarShorterComp from "@/components/NavbarShorterComp.vue";

export default {
  name: "ShorterLayout",
  components: { NavbarShorterComp },
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
};
</script>

<style>
</style>