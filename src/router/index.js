import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../views/LandingPage.vue";
import ModulTaskPageVue from "@/views/ModulTaskPage.vue";
import JourneyPageVue from "@/views/JourneyPage.vue";

import SignInPage from "../views/SignIn.vue";

import AdminLandingPage from "../views/AdminLandingPage.vue";
import AdminModulTaskPage from "../views/AdminModulTaskPage.vue";
import AdminJourneyPageVue from "@/views/AdminJourneyPage.vue";

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
      reload: true,
      authPage: true,
    },
  },
  {
    path: "/",
    name: "eepistelcom.index",
    component: LandingPage,
    // meta: {
    //   reload: true,
    //   requiresAuth: true,
    // },
  },
  {
    path: "/admin",
    name: "eepistelcom.admin",
    component: AdminLandingPage,
    meta: {
      reload: true,
      requiresAuth: true,
    },
  },
  {
    path: "/admin/kuliah/:id",
    name: "eepistelcom.adminkuliah",
    component: AdminModulTaskPage,
    meta: {
      reload: true,
      requiresAuth: true,
    },
  },
  {
    path: "/admin/journey/all-moments",
    name: "eepistelcom.adminjourney",
    component: AdminJourneyPageVue,
    meta: {
      requiresAuth: true,
    },
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
    const user = await getCurrentUser();
    if (user) {
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
