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

          <button
            id="readProductButton"
            data-modal-toggle="readProductModal"
            class="text-white hover:font-bold bg-yellow-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0"
            type="button"
          >
            + Add Task
          </button>
        </div>

        <!-- Main modal -->
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
                  <p class="font-bold">{{ nameMatkul }}</p>
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

              <form @submit.prevent="writeTask()">
                <div>
                  <div class="mb-4">
                    <label
                      for="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white placeholder:text-dark"
                      >Name</label
                    >
                    <input
                      type="text"
                      id="base-input"
                      class="block w-full p-2 text-gray-900 border-0 rounded-lg bg-gray-100 sm:text-xs"
                      placeholder="ex: Tugas 1"
                      v-model="dataSendTask.name"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Deskripsi</label
                    >
                    <textarea
                      type="text"
                      id="base-input"
                      placeholder="ex: Cisco Dynamic Routing"
                      rows="3"
                      class="block w-full p-2 text-gray-900 border-0 rounded-lg bg-gray-100 sm:text-xs"
                      v-model="dataSendTask.deskripsi"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Deadline</label
                    >
                    <input
                      type="text"
                      id="base-input"
                      placeholder="ex: Rabu, 18 Oktober 2023 12:00"
                      class="block w-full p-2 text-gray-900 border-0 rounded-lg bg-gray-100 sm:text-xs"
                      v-model="dataSendTask.due"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Link Pengumpulan Tugas</label
                    >
                    <input
                      type="text"
                      id="base-input"
                      placeholder="ex: https://drive or PJMK Yudha"
                      class="block w-full p-2 text-gray-900 border-0 rounded-lg bg-gray-100 sm:text-xs"
                      v-model="dataSendTask.url"
                    />
                  </div>

                  <div class="mb-6">
                    <label
                      for="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Jenis</label
                    >
                    <select
                      id="countries"
                      class="bg-gray-100 border-0 text-gray-900 text-sm rounded-lg block w-full"
                      v-model="dataSendTask.jenis"
                      required
                    >
                      <option value="Tugas">Tugas</option>
                      <option value="Postest">Postest</option>
                      <option value="UTS">UTS</option>
                      <option value="UAS">UAS</option>
                    </select>
                  </div>
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

      <section>
        <div class="max-w-screen-xl mx-auto my-14">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mx-6">
            <div class="mb-12">
              <p
                class="mx-6 text-sky-900 font-semibold text-2xl mb-2 md:text-start text-center"
              >
                Modul
              </p>
              <template v-for="(matkul, index) in dataModul" :key="index">
                <!-- <router-link :to="'/kuliah/' + matkul.slug"> -->
                <div class="bg-gray-50 w-full rounded-xl border-1 shadow-md">
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
                    <div class="grid grid-cols-2 md:grid-cols-1">
                      <p class="font-normal text-xs text-gray-500">
                        {{ matkul.date }}
                      </p>
                      <a
                        :href="matkul.url"
                        target="_blank"
                        class="font-normal text-end md:text-start md:mt-4 text-xs text-gray-500"
                      >
                        <span
                          class="bg-yellow-300 px-2 py-0.5 hover:px-2.5 hover:py-1 rounded-full text-sky-900"
                          >Access Modul</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </template>

              <div
                class="shadow-xl bg-sky-900 rounded-xl mt-4 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 gap-1 md:text-center md:mx-auto"
              >
                <p
                  class="text-white font-semibold text-sm mx-4 my-2 lg:my-2 md:mb-0 md:text-start"
                >
                  Ethol
                </p>
                <a
                  href="https://ethol.pens.ac.id"
                  target="_blank"
                  class="font-normal lg:text-end mr-4 my-auto text-xs md:mx-4 lg:my-auto md:mt-1 md:mb-4 md:text-start text-end text-gray-500"
                >
                  <span
                    class="bg-yellow-300 px-2.5 py-0.5 hover:py-1 hover:px-3 rounded-full text-sky-900"
                    >Get started !</span
                  >
                </a>

                <p
                  class="text-white font-semibold text-sm mx-4 my-2 lg:my-2 md:mb-0 md:text-start"
                >
                  Online Mis
                </p>
                <a
                  href="https://online.mis.pens.ac.id"
                  target="_blank"
                  class="font-normal lg:text-end mr-4 my-auto lg:my-auto text-xs md:mx-4 md:mt-1 md:mb-4 md:text-start text-end text-gray-500"
                >
                  <span
                    class="bg-yellow-300 px-2.5 py-0.5 hover:py-1 hover:px-3 rounded-full text-sky-900"
                    >Get started !</span
                  >
                </a>
              </div>
            </div>

            <div class="md:col-span-3">
              <p
                class="mx-6 text-sky-900 font-semibold text-2xl mb-2 md:text-start text-center"
              >
                Task
              </p>
              <template v-if="dataTask == null">
                <div class="bg-gray-50 w-full rounded-xl border-1 shadow mb-4">
                  <div class="p-4">
                    <h5 class="mb-2 md:text-md font-bold text-sky-900">
                      Belum Ada Task!
                    </h5>
                  </div>
                </div>
              </template>

              <template v-else v-for="(task, index) in dataTask" :key="index">
                <div class="bg-gray-50 w-full rounded-xl border-1 shadow mb-4">
                  <div class="p-4">
                    <h5
                      class="mb-2 md:text-md font-bold text-sky-900 capitalize"
                    >
                      {{ task.name }}
                    </h5>
                    <p
                      class="font-normal md:text-sm text-xs text-yellow-300 capitalize"
                    >
                      {{ task.deskripsi }}
                    </p>

                    <div class="grid md:grid-cols-4 grid-cols-1">
                      <div class="md:col-span-3 col-span-1">
                        <p class="font-normal text-xs text-gray-500 capitalize">
                          Deadline : {{ task.due }}
                        </p>
                      </div>
                      <div class="mt-3 md:mt-0">
                        <div class="font-normal text-end text-xs text-gray-500">
                          <button
                            class="rounded-full mx-2 py-1.5 px-1.5 bg-red-500 text-white"
                            @click="deleteTask(task.id, task.name)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              fill="currentColor"
                              class="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                              />
                            </svg>
                          </button>
                          <button
                            class="px-2 py-0.5 rounded-full bg-green-400 text-white"
                          >
                            {{ task.jenis }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </section>
    </div>
  </GuestLayout>
</template>

<script>
import {
  getDatabase,
  ref as dbRef,
  query,
  get,
  push,
  remove,
  orderByChild,
  equalTo,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { initFlowbite } from "flowbite";
import swal from "sweetalert";

import GuestLayout from "@/layouts/GuestLayout.vue";

export default {
  name: "AdminModulTaskView",
  components: { GuestLayout },
  setup() {
    onMounted(() => {
      initFlowbite();
    });

    const router = useRouter();
    const db = getDatabase();
    const auth = getAuth();

    const idpocket = router.currentRoute.value.params.id;

    const queryBySlug = query(
      dbRef(db, "modul"),
      orderByChild("slug"),
      equalTo(`${idpocket}`)
    );

    const dataModul = ref();
    const nameMatkul = ref();
    const dataTask = ref();

    const dataSendTask = reactive({
      id: generateRandomString(5),
      author: auth.currentUser.displayName,
      name: "",
      due: "",
      deskripsi: "",
      url: "",
      jenis: "",
    });

    get(queryBySlug)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataModulArray = Object.values(snapshot.val());
          dataModul.value = dataModulArray;
          let taskValue = [];

          if (dataModulArray[0].task != null) {
            dataModulArray.forEach((tasks) => {
              taskValue = Object.values(tasks.task);
            });
            dataTask.value = taskValue.reverse();
          }

          nameMatkul.value = dataModulArray[0].name;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    function generateRandomString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    }

    function writeTask() {
      get(queryBySlug)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const id = Object.keys(snapshot.val())[0];

            let taskRef = dbRef(db, `/modul/${id}/task`);

            push(taskRef, dataSendTask)
              .then(() => {
                swal({
                  title: "Success!",
                  text: "Success add new Task!",
                  icon: "success",
                  buttons: {
                    confirm: "Continue",
                  },
                }).then((willLeave) => {
                  if (willLeave) {
                    window.location.reload();
                  }
                });
              })
              .catch((error) => {
                // alert("Gagal menambahkan data");
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
                console.error("Gagal menambahkan data:", error);
              });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function deleteTask(index, value) {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete " + value + "?",
        icon: "warning",
        dangerMode: true,
        buttons: {
          confirm: "Yes, delete",
          cancel: "Cancel",
        },
      }).then((willLeave) => {
        if (willLeave) {
          get(queryBySlug)
            .then((snapshot) => {
              if (snapshot.exists()) {
                const id = Object.keys(snapshot.val())[0];

                const dataRef = query(
                  dbRef(db, `/modul/${id}/task`),
                  orderByChild("id"),
                  equalTo(`${index}`)
                );

                get(dataRef)
                  .then((snapshot) => {
                    if (snapshot.exists()) {
                      snapshot.forEach((childSnapshot) => {
                        // Menghapus data
                        const dataKey = childSnapshot.key;
                        const dataRemove = dbRef(
                          db,
                          `/modul/${id}/task/${dataKey}`
                        );
                        remove(dataRemove)
                          .then(() => {
                            swal("Delete!", "Data was deleted.", "success");
                            window.location.reload();
                          })
                          .catch((error) => {
                            window.location.reload();
                            console.error("Gagal menghapus data:", error);
                          });
                      });
                    } else {
                      console.log("No data available");
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              } else {
                swal("Failed!", "Data not validated", "warning");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          swal("Cancelled", "You chose to stay on this page.", "info");
        }
      });
    }
    return {
      dataModul,
      nameMatkul,
      dataSendTask,
      writeTask,
      deleteTask,
      dataTask,
    };
  },
};
</script>

<style>
</style>