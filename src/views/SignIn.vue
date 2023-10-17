<template>
  <div>
    <div class="max-w-screen-xl mx-auto text-center">
      <div class="h-screen flex items-center justify-center">
        <button
          @click="signInWithGoogle"
          class="bg-yellow-300 py-1.5 px-2 text-white rounded-full"
        >
          <span class="text-sm-start mx-3 text-sky-900 hover:font-semibold">
            Sign In With Google</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
// import { ref } from "vue";
import {
  getAuth,
  // createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

// const email = ref("");
// const password = ref("");
const router = useRouter();
// const auth = getAuth();

// const register = () => {
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((data) => {
//       console.log("Successfully registered" + data);
//       router.push("/");
//     })
//     .catch((error) => {
//       console.log(error.code);
//       alert(error.message);
//     });
// };

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
    });
};
</script>
  
  <style>
#app .tosca {
  /* color: #6acacd; */
  background-color: #6acacd;
}
</style>