<template>
  <div>
    <div class="max-w-screen-xl mx-auto text-center">
      <div class="h-screen flex items-center justify-center">
        <div class="flex-none">
          <p class="text-4xl font-semibold">Ooops.. 404!</p>
          <p class="text-md my-4">
            It seems you goes to the wrong page. Did you misspelled the link?
          </p>
          <p class="text-md my-4">
            Why'd not take a cup of coffee in our
            <a href="/" class="text-md text-yellow-500 font-sans-serif"
              >homepage</a
            >
            ? Or..
          </p>
          <a href="/" class="text-md text-yellow-500 font-sans-serif"
            >‹ back to previous page.</a
          >
        </div>
        <p>{{ dataRedirect }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref as dbRef,
  getDatabase,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "RedirectView",
  setup() {
    const router = useRouter();
    const idpocket = router.currentRoute.value.params.id;

    const db = getDatabase();
    const queryUrl = query(
      dbRef(db, "link"),
      orderByChild("short_url"),
      equalTo(`${idpocket}`)
    );

    const dataRedirect = ref();

    get(queryUrl)
      .then((snapshot) => {
        if (snapshot.exists()) {
          dataRedirect.value = Object.values(snapshot.val());
          console.log(dataRedirect.value[0].dst_url);
          redirectWindow(dataRedirect.value[0].dst_url);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    function redirectWindow(value) {
      if (value != "") {
        window.location.href = value;
        // window.open("https://www.google.com");
      }
    }

    return { idpocket, redirectWindow, dataRedirect };
  },
};
</script>

<style>
</style>