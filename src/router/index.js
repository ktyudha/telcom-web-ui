// import { NavbarPlugin } from "bootstrap-vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import ModulTaskPageVue from "@/views/ModulTaskPage.vue";
import JourneyPageVue from "@/views/JourneyPage.vue";
import SignInPage from "../views/SignIn.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/kuliah/:id",
    name: "eepistelcom.modultask",
    component: ModulTaskPageVue,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/journey/all-moments",
    name: "eepistelcom.journey",
    component: JourneyPageVue,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/login",
    name: "login",
    component: SignInPage,
    meta: {
      authPage: true,
    },
  },
  {
    path: "/",
    name: "nabung.index",
    component: LandingPage,
    // meta: {
    //   reload: true,
    //   requiresAuth: true,
    // },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next({
        name: "login",
      });
    }
  } else {
    next();
  }
});

export default router;
