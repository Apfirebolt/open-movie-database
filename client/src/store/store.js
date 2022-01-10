import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth/auth";
import movie from "./modules/movie/movie";
import playlist from "./modules/playlist/playlist";
import category from "./modules/category/category";
import user from "./modules/user/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    movie,
    category,
    playlist,
    user,
  },
});
