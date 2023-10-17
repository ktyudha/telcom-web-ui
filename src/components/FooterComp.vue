<template>
  <div>
    <div class="mx-6 mb-24">
      <div class="max-w-screen-lg mx-auto rounded-3xl bg-yellow-300 mb-8">
        <div class="py-16 mx-4">
          <p class="font-semibold text-center text-3xl">
            Official Media of Telecommunication Engineering
          </p>
          <p class="text-center text-gray-800 mt-4">
            La Tahzan Innallah Ma'ana
          </p>
          <div class="max-w-md mx-auto mt-8">
            <div class="grid grid-cols-3">
              <div class="col-span-2 mr-4">
                <input
                  type="email"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border-0 text-gray-900 text-sm w-full py-2 dark:bg-gray-700 rounded-xl"
                />
              </div>
              <div class="text-end">
                <button
                  class="bg-sky-900 py-2 px-4 text-sm rounded-xl text-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-gray-100">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <router-link to="/" class="flex items-center">
              <img
                :src="pathIcon"
                class="h-8 mr-3 rounded-full"
                alt="FlowBite Logo"
              />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap text-sky-900"
                >eepistelcom</span
              >
            </router-link>
          </div>
          <div class="grid grid-cols-3 gap-8">
            <div class="lg:mx-8">
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Navigation
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <router-link to="/" class="hover:underline">Home</router-link>
                </li>
                <li class="mb-4">
                  <router-link to="/" class="hover:underline"
                    >About Us</router-link
                  >
                </li>
                <li class="mb-4">
                  <router-link to="/" class="hover:underline"
                    >Our Journey</router-link
                  >
                </li>
                <li class="mb-4">
                  <router-link to="/" class="hover:underline"
                    >Project</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="lg:mx-8">
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Follow us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://www.instagram.com/t3rlelah"
                    class="hover:underline"
                    target="_blank"
                  >
                    Instagram</a
                  >
                </li>
                <li class="mb-4">
                  <a
                    href="https://github.com/"
                    class="hover:underline"
                    target="_blank"
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    href="https://discord.gg/"
                    class="hover:underline"
                    target="_blank"
                    >Discord</a
                  >
                </li>
              </ul>
            </div>
            <div class="lg:ml-8">
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                MAHASISWA
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gender-male"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                    />
                  </svg>

                  <span class="ml-4 text-sm font-medium">19 Male</span>
                </li>
                <li class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gender-female"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
                    />
                  </svg>
                  <span class="ml-4 text-sm font-medium">9 Female</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a href="https://flowbite.com/" class="hover:underline"
              >eepistelcom</a
            >
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" class="text-sky-900 hover:text-yellow-300">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path
                  d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                />
              </svg>
              <span class="sr-only">Discord community</span>
            </a>

            <a
              href="https://www.instagram.com/t3rlelah"
              target="_blank"
              class="text-sky-900 hover:text-yellow-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                />
              </svg>
              <span class="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import pathIcon from "../assets/dipsy.jpeg";
export default {
  name: "FooterComponent",
  setup() {
    return { pathIcon };
  },
};
</script>

<style>
</style>