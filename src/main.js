import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjqXjFackoT8EqMsybsf4wapuhPYR-txY",
  authDomain: "eepistelcom.firebaseapp.com",
  databaseURL:
    "https://eepistelcom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eepistelcom",
  storageBucket: "eepistelcom.appspot.com",
  messagingSenderId: "473968038764",
  appId: "1:473968038764:web:2375d7b9c5f4156e2d9949",
  measurementId: "G-MHXHWLZBRD",
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
getDatabase(config);
// const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App);

app.use(router);
app.mount("#app");
