<template>
  <div class="max-w-2xl mx-auto">
    <div class="text-center my-10">
      <h2 class="font-bold mb-5">Kalkulator IPS</h2>
      <p class="font-medium mb-5 text-4xl text-sky-900">{{ dataIps }}</p>

      <div class="relative overflow-x-auto shadow rounded-xl mx-6">
        <table
          class="w-full text-sm text-center text-gray-500 border-0 rounded-xl"
        >
          <thead class="text-xs text-white uppercase bg-sky-900">
            <tr>
              <th scope="col" class="px-6 py-3 text-start">No</th>
              <th scope="col" class="px-6 py-3">Kredit</th>
              <th scope="col" class="px-6 py-3">Nilai</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(rekap, index) in allData"
              :key="index"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ index + 1 }}
              </th>
              <td class="px-6 py-4">{{ rekap.kredit }}</td>
              <td class="px-6 py-4">{{ rekap.nilai }}</td>
              <td class="px-6 py-4">
                <button
                  @click="removeData(index)"
                  class="rounded-full mx-2 py-1.5 px-1.5 bg-red-500 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mx-auto text-center my-5">
      <!-- Modal toggle -->
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="inline-flex mx-auto max-w-sm justify-center items-center py-2 px-5 text-base text-center text-sky-900 hover:font-semibold rounded-full bg-yellow-300"
        type="button"
      >
        Tambah data
      </button>

      <!-- Main modal -->
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600"
            >
              <h6 class="text-xl font-semibold text-gray-900 dark:text-white">
                Tambah data
              </h6>
              <button
                type="button"
                class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
              <form class="space-y-4" action="#" @submit.prevent="tambahData()">
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
                    >Kredit</label
                  >
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="data.kredit"
                  >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
                    >Nilai</label
                  >
                  <select
                    id="countries"
                    v-model="data.nilai"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected value="A">A</option>
                    <option value="AB">AB</option>
                    <option value="B">B</option>
                    <option value="BC">BC</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
                </div>

                <button
                  type="submit"
                  data-modal-hide="authentication-modal"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Tambahkan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { initFlowbite } from "flowbite";
import swal from "sweetalert";

export default {
  name: "KalkulatorIps",
  setup() {
    onMounted(() => {
      initFlowbite();
    });

    const data = reactive({ id: 0, kredit: "", nilai: "" });
    const allData = ref([]);
    const nilaiConvertion = ref();
    const sumTiapMatkul = ref();
    const sumOfkredit = ref();

    const dataIps = ref();
    var dataIndex = 0;

    dataIps.value = 0;
    sumTiapMatkul.value = 0;
    sumOfkredit.value = 0;

    function tambahData() {
      dataConvertion(data.nilai);
      if (
        data.nilai == null ||
        data.nilai == "" ||
        data.kredit == null ||
        data.kredit == ""
      ) {
        showErrorAlert();
      } else {
        queryData();
        allData.value.push({
          id: dataIndex,
          kredit: data.kredit,
          nilai: data.nilai,
        });

        nullData();
      }
    }

    function nullData() {
      data.kredit = null;
      data.nilai = null;
    }

    function nilaiTiapMatkul(valueNilai, valueKredit) {
      var nilai = valueNilai * valueKredit;
      return nilai;
    }

    function showErrorAlert() {
      swal({
        title: "Failed!",
        text: "Please enter Nilai and Kredit Valid data",
        icon: "warning",
        buttons: {
          confirm: "Back",
        },
      });
    }

    function removeData(id) {
      dataConvertion(allData.value[id].nilai);

      var valSumMatkul = nilaiTiapMatkul(
        nilaiConvertion.value,
        allData.value[id].kredit
      );
      dataIps.value =
        (sumTiapMatkul.value - valSumMatkul) /
        (sumOfkredit.value - allData.value[id].kredit);
      // console.log(allData.value[id].kredit);

      if (isNaN(dataIps.value)) {
        dataIps.value = 0;
      }
      allData.value.splice(id, 1);
    }

    function queryData() {
      sumTiapMatkul.value += nilaiTiapMatkul(
        nilaiConvertion.value,
        parseInt(data.kredit)
      );
      sumOfkredit.value += parseInt(data.kredit);
      dataIps.value = sumTiapMatkul.value / sumOfkredit.value;
    }
    function dataConvertion(value) {
      var xval = value;

      if (xval == "A") {
        nilaiConvertion.value = 4;
      } else if (xval == "AB") {
        nilaiConvertion.value = 3.5;
      } else if (xval == "B") {
        nilaiConvertion.value = 3;
      } else if (xval == "BC") {
        nilaiConvertion.value = 2.5;
      } else if (xval == "C") {
        nilaiConvertion.value = 2;
      } else if (xval == "D") {
        nilaiConvertion.value = 1;
      } else {
        nilaiConvertion.value = 0;
      }
    }

    return { data, allData, tambahData, removeData, dataIps };
  },
};
</script>

<style>
</style>