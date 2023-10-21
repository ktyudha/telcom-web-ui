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
            Our Journey
          </h1>
        </div>
      </section>
      <div class="mx-6">
        <div class="max-w-screen-xl mx-auto my-14">
          <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
            <template v-for="(journey, index) in dataJourney" :key="index">
              <div class="md:mx-0 mx-auto">
                <img
                  class="h-56 max-w-full rounded-lg"
                  :src="journey.url"
                  :alt="journey.title"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>

<script>
import GuestLayout from "@/layouts/GuestLayout.vue";
import { ref } from "vue";
import { getDatabase, ref as dbRef, get, query } from "firebase/database";

export default {
  name: "JourneyPage",
  components: {
    GuestLayout,
  },
  setup() {
    const db = getDatabase();

    const queryBySlug = query(dbRef(db, "journey"));

    const dataJourney = ref();

    get(queryBySlug)
      .then((snapshot) => {
        if (snapshot.exists()) {
          dataJourney.value = snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return { dataJourney };
  },
};
</script>

<style>
</style>