<template>
  <div>
    <NavbarCompVue />
    <slot />
    <FooterCompVue />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

import NavbarCompVue from "@/components/NavbarComp.vue";
import FooterCompVue from "@/components/FooterComp.vue";

export default {
  name: "GuestLayout",
  components: {
    NavbarCompVue,
    FooterCompVue,
  },
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
};
</script>

<style>
</style>