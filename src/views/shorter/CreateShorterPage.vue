<template>
  <ShorterLayoutVue class="h-screen">
    <div class="w-full lg:h-3/6 h-3/6 md:h-2/5 bg-sky-900">
      <h2
        class="h-3/6 text-white text-4xl font-semibold text-center flex items-center justify-center"
      >
        URL Shortener
      </h2>
    </div>
    <div class="mx-6">
      <div
        class="max-w-screen-lg md:mt-[-68px] mt-[-128px] md:h-32 h-60 align-middle bg-white rounded-3xl shadow-lg mx-auto"
      >
        <form action="">
          <div class="mx-4 relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5m-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1m2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              class="block w-full p-4 ps-14 text-md text-gray-900 border-0 rounded-lg focus:ring-0 bg-white placeholder:opacity-80 placeholder:font-light"
              placeholder="https://example.com/my-long-url"
              required
            />
          </div>
          <div
            class="mt-2 grid lg:grid-cols-12 md:grid-cols-10 grid-cols-1 mx-8 gap-2"
          >
            <div
              class="col-span-3 md:col-span-4 rounded-lg flex items-center bg-gray-100 py-2 justify-between mb-2"
            >
              <h4 class="mx-3">eepistelcom.web.app/link</h4>
              <div class="text-end mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"
                  />
                </svg>
              </div>
            </div>
            <div class="text-center items-center my-auto lg:ml-0">
              <p class="text-center align-middle items-center">/</p>
            </div>
            <div
              class="rounded-lg col-span-6 md:col-span-3 lg:col-span-5 bg-gray-100 py-1 mb-2"
            >
              <input
                type="text"
                class="w-full text-sm text-black font-medium border-0 rounded-lg focus:ring-0 bg-gray-100 placeholder:opacity-50 placeholder:font-light"
                placeholder="Custom back-half (optional)"
              />
            </div>
            <div class="md:col-span-2 col-span-6 text-end align-middle">
              <button
                type="button"
                class="w-full md:w-auto text-white bg-sky-900 py-2 px-7 rounded-full hover:bg-yellow-300 ease-in-out duration-300"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        class="max-w-screen-lg md:mt-10 mt-6 align-middle bg-sky-900 rounded-3xl shadow-lg mx-auto p-4"
      >
        <div class="flex items-end">
          <img
            :src="pathIcon"
            class="h-12 mr-3 rounded-full"
            alt="eepistelcom_logo"
          />
          <div>
            <h5 class="mb-1 md:text-md text-xs font-semibold text-yellow-300">
              eepistelcom.web.app/link/CustomLink
            </h5>
            <p class="font-normal md:text-sm text-xs text-white">
              https://example.com/my-long-url
            </p>
          </div>
          <div class="flex items-center justify-center"></div>
        </div>
        <hr class="my-4" />
        <div class="grid md:grid-cols-4 grid-cols-2">
          <div class="md:col-span-3 col-span-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="text-white h-4 w-4"
            >
              <g fill="none">
                <rect
                  width="18"
                  height="15"
                  x="3"
                  y="6"
                  stroke="currentColor"
                  stroke-width="2"
                  rx="2"
                />
                <path
                  fill="currentColor"
                  d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M7 3v3m10-3v3"
                />
              </g>
            </svg>
            <p class="font-normal text-xs text-white capitalize ml-2">
              Dec 21, 2023
            </p>
          </div>
          <div class="mt-3 md:mt-0">
            <div
              class="font-normal text-end text-xs text-gray-500 items-center"
            >
              <button
                class="rounded-full mx-2 py-1.5 px-1.5 bg-yellow-300 text-sky-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="h-4 w-4"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path
                      d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"
                    />
                    <path
                      d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3"
                    />
                  </g>
                </svg>
              </button>
              <button
                class="rounded-full mx-2 py-1.5 px-1.5 bg-yellow-300 text-sky-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263M21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9z"
                  />
                </svg>
              </button>
              <button
                class="rounded-full ml-2 py-1.5 px-1.5 bg-red-500 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                  class="h-4 w-4"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="m112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                  />
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M80 112h352"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224l8 224m136-224l-8 224"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ShorterLayoutVue>
</template>

<script>
import ShorterLayoutVue from "@/layouts/ShorterLayout.vue";
import pathIcon from "../../assets/dipsy.jpeg";

export default {
  name: "CreateShorter",
  components: {
    ShorterLayoutVue,
  },
  setup() {
    return { pathIcon };
  },
};
</script>

<style>
</style>