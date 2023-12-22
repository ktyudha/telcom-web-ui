<template>
  <div>
    <nav class="bg-sky-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link to="/" class="flex items-center">
          <img
            :src="pathIcon"
            class="h-8 mr-3 rounded-full"
            alt="eepistelcom_logo"
          />
          <span
            class="self-center md:text-2xl text-lg font-semibold whitespace-nowrap text-white"
            >eepistelcom</span
          >
        </router-link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:bg-sky-900 bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
          >
            <li>
              <router-link
                to="/link"
                class="block md:p-1 py-2 px-3 md:text-white text-sky-900 rounded hover:text-yellow-300 md:hover:text-yellow-300"
                aria-current="eepistelcom.urlshortener"
                >URLShort</router-link
              >
            </li>
            <li>
              <router-link
                to="/calculator"
                class="block md:p-1 py-2 px-3 md:text-white text-sky-900 rounded hover:text-yellow-300 md:hover:text-yellow-300"
                >CalcIPS</router-link
              >
            </li>
            <li>
              <router-link
                to="/login"
                class="text-sky-900 bg-white hover:bg-yellow-300 font-medium rounded-full text-xs md:px-4 md:py-2 px-2 py-1 text-center mr-3 md:mr-0"
              >
                Sign In
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

import pathIcon from "../assets/dipsy.jpeg";
export default {
  name: "NavbarShorterComp",
  setup() {
    onMounted(() => {
      initFlowbite();
    });
    return { pathIcon };
  },
};
</script>

<style>
</style>