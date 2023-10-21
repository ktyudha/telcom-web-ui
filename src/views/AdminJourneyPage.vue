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
          <button
            id="readProductButton"
            data-modal-toggle="readProductModal"
            class="text-white hover:font-bold bg-yellow-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0"
            type="button"
          >
            + Add Moment
          </button>
        </div>
        <div
          id="readProductModal"
          tabindex="-1"
          aria-hidden="true"
          class="hidden text-white overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
          <div class="relative p-4 w-full max-w-xl h-full md:h-auto">
            <!-- Modal content -->
            <div
              class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
            >
              <!-- Modal header -->
              <div class="flex justify-between mb-4 rounded-t sm:mb-5">
                <div class="text-lg text-gray-900 md:text-xl dark:text-white">
                  <!-- <h3 class="font-semibold">+ Add Task</h3> -->
                  <p class="font-bold">Journey</p>
                </div>
                <div>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="readProductModal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
              </div>

              <form @submit.prevent="writeMoment()">
                <div>
                  <div class="mb-4">
                    <label
                      for="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white placeholder:text-dark"
                      >Title</label
                    >
                    <input
                      type="text"
                      id="base-input"
                      class="block w-full p-2 text-gray-900 border-0 rounded-lg bg-gray-100 sm:text-xs"
                      placeholder="ex: Liburan ke Kediri"
                      v-model="dataMoment.title"
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      for="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white placeholder:text-dark"
                      >Title</label
                    >
                    <input
                      type="file"
                      id="base-input"
                      class="w-full text-gray-900 border-0 rounded-lg bg-gray-100 sm:text-xs"
                      @change="onFileChange"
                      required
                    />
                  </div>
                  <img
                    :src="previewUrl"
                    alt="Uploaded Image"
                    class="rounded-lg mb-8"
                    v-if="previewUrl"
                  />
                </div>

                <div class="flex justify-between items-center">
                  <button
                    type="submit"
                    class="inline-flex items-center text-white bg-sky-900 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                    data-modal-toggle="readProductModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-file-earmark-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
                      />
                    </svg>
                    <span class="mx-2">Save</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-6">
        <div class="max-w-screen-xl mx-auto my-14">
          <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
            <template v-for="(journey, index) in dataJourney" :key="index">
              <div class="mx-auto">
                <img
                  class="h-56 max-w-full rounded-lg"
                  :src="journey.url"
                  :alt="journey.title"
                />
              </div>
            </template>
          </div>
        </div>
      </section>
    </div>
  </GuestLayout>
</template>

<script>
import GuestLayout from "@/layouts/GuestLayout.vue";
import { reactive, ref } from "vue";
import { getDatabase, ref as dbRef, get, query, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref as sgRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import swal from "sweetalert";

export default {
  name: "JourneyPage",
  components: {
    GuestLayout,
  },
  setup() {
    const db = getDatabase();
    const auth = getAuth();
    const storage = getStorage();
    const timestamp = new Date().getTime();

    const queryBySlug = query(dbRef(db, "journey"));
    const taskRef = dbRef(db, `/journey`);

    const storageRef = sgRef(storage, `/journey/${timestamp}`);

    const dataMoment = reactive({
      author: auth.currentUser.displayName,
      title: "",
      url: "",
    });

    const dataJourney = ref();
    const previewUrl = ref();

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

    function onFileChange(event) {
      dataMoment.url = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(dataMoment.url);
      reader.onload = () => {
        previewUrl.value = reader.result;
      };
    }

    function writeMoment() {
      if (dataMoment.url) {
        uploadBytes(storageRef, dataMoment.url)
          .then((snapshot) => {
            console.log("Gambar berhasil diunggah!" + snapshot);
            return getDownloadURL(storageRef);
          })
          .then((downloadURL) => {
            dataMoment.url = downloadURL; // Simpan URL gambar dalam objek dataMoment
            return push(taskRef, dataMoment);
          })
          .then(() => {
            console.log("Data berhasil diunggah ke Realtime Database!");
            showSuccessAlert();
          })
          .catch((error) => {
            console.error("Gagal mengunggah data dan gambar:", error);
            showErrorAlert();
          });
      } else {
        // Jika tidak ada gambar yang diunggah, langsung menyimpan dataMoments ke Realtime Database
        push(taskRef, dataMoment)
          .then(() => {
            console.log("Data berhasil diunggah ke Realtime Database!");
            showSuccessAlert();
          })
          .catch((error) => {
            console.error("Gagal mengunggah data:", error);
            showErrorAlert();
          });
      }
    }
    // function writeMoment() {
    //   uploadBytes(storageRef, dataMoment.url).then((snapshot) => {
    //     console.log("Uploaded a blob or file!");
    //     console.log(snapshot);
    //   });

    //   push(taskRef, dataMoment)
    //     .then(() => {
    //       showSuccessAlert();
    //     })
    //     .catch((error) => {
    //       showErrorAlert();
    //       console.error("Gagal menambahkan data:", error);
    //     });
    // }
    function showSuccessAlert() {
      swal({
        title: "Success!",
        text: "Success add moment for our journey!",
        icon: "success",
        buttons: {
          confirm: "Continue",
        },
      }).then((willLeave) => {
        if (willLeave) {
          window.location.reload();
        }
      });
    }

    function showErrorAlert() {
      swal({
        title: "Failed!",
        text: "Your Email Can't Create Task",
        icon: "warning",
        buttons: {
          confirm: "Back",
        },
      }).then((willLeave) => {
        if (willLeave) {
          window.location.reload();
        }
      });
    }

    return {
      writeMoment,
      dataMoment,
      dataJourney,
      onFileChange,
      previewUrl,
    };
  },
};
</script>

<style>
</style>