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
      <div>
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
                class="d-none shadow-xl bg-sky-900 rounded-xl mt-4 grid grid-cols-2"
              >
                <p
                  class="text-white font-semibold text-sm mx-4 my-2 md:text-start"
                >
                  Ethol
                </p>
                <a
                  href="https://ethol.pens.ac.id"
                  target="_blank"
                  class="font-normal text-end mr-4 my-auto text-xs text-gray-500"
                >
                  <span
                    class="bg-yellow-300 px-2.5 py-0.5 hover:py-1 hover:px-3 rounded-full text-sky-900"
                    >Get started !</span
                  >
                </a>
                <p
                  class="text-white font-semibold text-sm mx-4 my-2 md:text-start"
                >
                  Online Mis
                </p>
                <a
                  href="https://online.mis.pens.ac.id"
                  target="_blank"
                  class="font-normal text-end mr-4 my-auto text-xs text-gray-500"
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
                    <h5 class="mb-2 md:text-md font-bold text-sky-900">
                      {{ task.name }}
                    </h5>
                    <p class="font-normal md:text-sm text-xs text-yellow-300">
                      {{ task.deskripsi }}
                    </p>

                    <div class="grid grid-cols-4">
                      <p class="col-span-3 font-normal text-xs text-gray-500">
                        Deadline Tugas: {{ task.due }}
                      </p>
                      <p class="font-normal text-end text-xs text-gray-500">
                        <span
                          class="md:px-2 md:py-1.5 px-1.5 py-0.5 rounded-full text-white"
                          :class="
                            task.status === 'Done'
                              ? 'bg-green-400'
                              : task.status === 'On Progress'
                              ? 'bg-yellow-400'
                              : 'bg-gray-400'
                          "
                          >{{ task.status }}</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>

<script>
import {
  getDatabase,
  ref as dbRef,
  query,
  get,
  orderByChild,
  equalTo,
} from "firebase/database";
import { ref } from "vue";
import { useRouter } from "vue-router";

import GuestLayout from "@/layouts/GuestLayout.vue";

export default {
  name: "ModulTaskView",
  components: { GuestLayout },
  setup() {
    const router = useRouter();
    const db = getDatabase();

    const idpocket = router.currentRoute.value.params.id;

    const queryBySlug = query(
      dbRef(db, "modul"),
      orderByChild("slug"),
      equalTo(`${idpocket}`)
    );

    const dataModul = ref();
    const dataTask = ref();

    get(queryBySlug)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataModulArray = Object.values(snapshot.val());

          let task = [];
          dataModul.value = dataModulArray;
          dataModulArray.forEach((tasks) => {
            task = Object.values(tasks.task);
          });

          dataTask.value = task.reverse();
          // console.log(task);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return {
      dataModul,
      dataTask,
    };
  },
};
</script>

<style>
</style>