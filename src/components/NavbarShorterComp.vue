<template>
  <div>
    <nav class="bg-sky-900 fixed w-full z-20 top-0 left-0 border-0">
      <div
        class="md:max-w-screen-xl max-w-screen-sm flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <!-- {{ dataUser }} -->

        <router-link to="/" class="flex items-center">
          <img
            :src="pathIcon"
            class="h-8 mr-3 rounded-full"
            alt="eepistelcom Logo"
          />
          <span
            class="self-center md:text-2xl text-lg font-semibold whitespace-nowrap text-white"
            >eepistelcom</span
          >
        </router-link>
        <div class="flex md:order-2">
          <div v-if="dataUser == null" class="my-auto">
            <router-link
              to="/login"
              class="text-dark bg-white hover:bg-yellow-300 font-medium rounded-full text-xs md:px-4 md:py-2 px-2 py-1 text-center mr-3 md:mr-0"
            >
              Sign In
            </router-link>
          </div>
          <div v-else class="my-auto mx-auto">
            <button
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              class="text-black capitalize bg-white font-medium rounded-full text-xs md:px-5 md:py-2.5 px-2 py-1 my-auto text-center inline-flex items-center mr-3 md:mr-0"
              type="button"
            >
              {{ dataUser.displayName }}
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownDivider"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow"
            >
              <ul
                class="py-2 text-sm text-black"
                aria-labelledby="dropdownDividerButton"
              >
                <li>
                  <p class="mx-4 mt-2 capitalize">
                    {{ dataUser.displayName }}
                  </p>
                  <p class="mx-4 mb-2">
                    {{ dataUser.email }}
                  </p>
                </li>
                <hr class="h-px bg-black border-0 mx-4" />
                <li>
                  <p
                    class="mx-4 my-2 flex text-red-500 hover:px-2 hover:bg-red-500 hover:text-white hover:rounded"
                    @click="logout"
                  >
                    <span class="mr-2 my-auto">Sign Out</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-box-arrow-right my-auto"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-yellow-300 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
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
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:bg-transparent bg-white md:p-0 mt-4 font-medium borde-0 rounded-lg md:flex-row md:space-x-8 md:mt-0"
          >
            <li>
              <router-link
                :to="
                  dataUser
                    ? { name: 'eepistelcom.admin' }
                    : { name: 'eepistelcom.index' }
                "
                class="block py-2 pl-3 pr-4 rounded md:text-white text-sky-900 hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
                >Home</router-link
              >
            </li>
            <hr />
            <li>
              <a
                :href="dataUser ? '/admin/#journey' : '/#journey'"
                class="block py-2 pl-3 pr-4 md:text-white text-sky-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
                >Our Journey
              </a>
            </li>
            <hr />
            <li>
              <a
                :href="dataUser ? '/admin/#member' : '/#member'"
                class="block py-2 pl-3 pr-4 md:text-white text-sky-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
                >About Us</a
              >
            </li>
            <hr />
            <li v-if="dataUser">
              <router-link
                to="/link"
                class="block py-2 pl-3 pr-4 md:text-white text-sky-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
                >URLShort</router-link
              >
            </li>
            <hr v-if="dataUser" />
            <li>
              <router-link
                to="/calculator"
                class="block py-2 pl-3 pr-4 md:text-white text-sky-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
                >Calculator IPS</router-link
              >
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import pathIcon from "../assets/dipsy.jpeg";
import { getAuth, signOut } from "firebase/auth";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { initFlowbite } from "flowbite";
import swal from "sweetalert";

export default {
  name: "NavBarComponent",
  setup() {
    onMounted(() => {
      initFlowbite();
    });

    const router = useRouter();
    const auth = getAuth();
    const dataUser = ref();

    dataUser.value = auth.currentUser;

    function logout() {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to leave this page?",
        icon: "warning",
        dangerMode: true,
        buttons: {
          confirm: "Yes, leave",
          cancel: "Cancel",
        },
      }).then((willDelete) => {
        if (willDelete) {
          signOut(auth)
            .then(() => {
              router.push("/");
            })
            .catch((error) => {
              // An error happened.
              swal(error.message);
            });
          swal("Sign Out!", "You was Sign Out!", "success");
        } else {
          swal("Cancelled", "You chose to stay on this page.", "info");
        }
      });
    }
    return { pathIcon, logout, dataUser };
  },
};
</script>

<style>
</style>