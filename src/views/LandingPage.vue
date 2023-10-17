<template>
  <div>
    <GuestLayoutVue>
      <section
        class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
      >
        <div
          class="px-4 mt-10 mx-auto md:max-w-screen-xl max-w-screen-sm text-center py-24 lg:py-56"
        >
          <h1
            class="mb-4 text-3xl font-semibold tracking-tight leading-none text-white md:text-4xl lg:text-6xl"
          >
            TELECOMMUNICATION EEPIS
          </h1>
          <p
            class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          >
            Apakah Anda sudah beryukur hari ini?
          </p>
          <div
            class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/#member"
              class="inline-flex justify-center items-center py-2 px-5 text-base text-center text-sky-900 hover:font-semibold rounded-full bg-yellow-300"
            >
              D3 TA 2022
            </a>
          </div>
        </div>
      </section>

      <section id="modul-task" class="max-w-screen-xl mx-auto mt-20 mb-24">
        <p class="font-bold lg:text-5xl text-2xl text-center mt-2 text-sky-900">
          Modul & Task
        </p>
        <hr
          class="lg:w-32 w-16 lg:h-1.5 h-1 mx-auto lg:mt-4 mt-2 mb-12 bg-yellow-300"
        />
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mx-6">
          <template v-for="(matkul, index) in dataMataKuliah.data" :key="index">
            <div>
              <router-link :to="'/kuliah/' + matkul.slug">
                <div
                  class="bg-gray-50 h-full w-full rounded-xl border-1 shadow-md hover:rotate-2"
                >
                  <div class="p-4">
                    <h5 class="mb-2 md:text-md font-bold text-sky-900">
                      {{ matkul.name }}
                    </h5>
                    <p class="font-normal md:text-sm text-xs text-yellow-300">
                      {{ matkul.pengampuh }}
                    </p>
                    <p class="font-normal text-xs text-gray-500">
                      {{ matkul.room }}
                    </p>
                    <p class="font-normal text-xs text-gray-500">
                      {{ matkul.date }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </template>
        </div>
      </section>

      <section id="journey" class="max-w-screen-xl mx-auto mt-20 mb-24">
        <p class="font-bold lg:text-5xl text-2xl text-center mt-2 text-sky-900">
          Our Journey
        </p>
        <hr
          class="lg:w-32 w-16 lg:h-1.5 h-1 mx-auto lg:mt-4 mt-2 mb-12 bg-yellow-300"
        />

        <div class="mx-6">
          <div
            id="default-carousel"
            class="relative w-full mb-4"
            data-carousel="slide"
          >
            <!-- Carousel wrapper -->
            <div class="relative h-56 z-0 overflow-hidden rounded-lg md:h-96">
              <!-- Item 1 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <!-- Item 3 -->
            </div>
            <!-- Slider indicators -->
            <div
              class="absolute z-0 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
            >
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            <!-- Slider controls -->
            <button
              type="button"
              class="absolute top-0 left-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
              >
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 right-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
              >
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="w-full text-center mt-6">
            <router-link
              to="/journey/all-moments"
              class="inline-flex justify-center items-center py-2 px-5 text-base text-center text-sky-900 hover:font-semibold rounded-full bg-yellow-300"
            >
              Browse
            </router-link>
          </div>
        </div>
      </section>

      <section id="member" class="max-w-screen-xl mx-auto mt-20 mb-24">
        <p class="font-bold lg:text-5xl text-2xl text-center mt-2 text-sky-900">
          About Us
        </p>
        <hr
          class="lg:w-32 w-16 lg:h-1.5 h-1 mx-auto lg:mt-4 mt-2 mb-12 bg-yellow-300"
        />

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-6">
          <template v-for="(member, index) in dataMember.data" :key="index">
            <div>
              <figure
                class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              >
                <div class="container">
                  <img
                    class="rounded-lg shadow-lg"
                    :src="pathIcon"
                    alt="image description"
                  />

                  <div class="overlay">
                    <p class="font-bold md:text-md text-sm">
                      {{ member.name }}
                    </p>
                    <p class="text-xs">{{ member.nrp }}</p>
                  </div>
                </div>
              </figure>
            </div>
          </template>
        </div>
      </section>
    </GuestLayoutVue>
  </div>
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";
import { onMounted, reactive } from "vue";
import { initFlowbite } from "flowbite";

import GuestLayoutVue from "@/layouts/GuestLayout.vue";

import pathIcon from "../assets/dipsy.jpeg";
export default {
  name: "LandingPage",
  components: {
    GuestLayoutVue,
  },
  setup() {
    onMounted(() => {
      initFlowbite();
    });

    const dbRef = ref(getDatabase());
    const dataMataKuliah = reactive({});
    const dataMember = reactive({});

    function truncateString(str, maxLength) {
      if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
      }
      return str;
    }

    get(child(dbRef, `/modul`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dataMataKuliah.data = Object.values(snapshot.val());

          console.log(snapshot.val());
          console.log(dataMataKuliah);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    get(child(dbRef, `/member`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dataMember.data = Object.values(snapshot.val());

          console.log(snapshot.val());
          console.log(dataMataKuliah);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return { pathIcon, dataMataKuliah, truncateString, dataMember };
  },
};
</script>

<style>
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
.container:hover .overlay {
  opacity: 1;
}
</style>