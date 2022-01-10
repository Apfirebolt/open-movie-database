import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "../store/store";
import EmptyLayout from "../layouts/empty.vue";
import DashboardLayout from "../layouts/dashboard.vue";
import * as authTypes from "../store/modules/auth/auth-types";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: EmptyLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("../views/auth/login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/auth/register.vue"),
      },
    ],
  },
  {
    path: "/category",
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "CategoryHome",
        component: () => import("../views/category/Home.vue"),
      },
    ],
  },
  {
    path: "/movie",
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "MovieHome",
        component: () => import("../views/movie/Home.vue"),
      },
    ],
  },
  {
    path: "/playlist",
    meta: {
      requiresAuth: true,
    },
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "PlaylistHome",
        component: () => import("../views/playlist/Home.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const allowedRoutes = ["Login", "Register", "Home"];
  if (allowedRoutes.indexOf(to.name) === -1) {
    // Protected routes, load profile data if not available in vuex store
    if (!store.state.auth.profileData) {
      store.dispatch(authTypes.GET_PROFILE_DATA_ACTION);
    }
  }
  next();
});

export default router;
