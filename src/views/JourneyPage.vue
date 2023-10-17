<template>
  <GuestLayout>
    <div class="md:pt-6 pt-8">
      <section
        class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
      >
        <div
          class="px-4 mt-10 mx-auto md:max-w-screen-xl max-w-screen-sm text-center py-8 lg:py-16"
        >
          <h1
            class="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          >
            Modul & Task
          </h1>
        </div>
      </section>

      <div class="max-w-screen-xl mx-auto my-14"></div>
    </div>
  </GuestLayout>
</template>

<script>
import GuestLayout from "@/layouts/GuestLayout.vue";
export default {
  name: "JourneyPage",
  components: {
    GuestLayout,
  },
};
</script>

<style>
</style>