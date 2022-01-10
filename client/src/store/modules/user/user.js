import * as types from "./user-types";
import axios from "axios";

const state = {
  user: null,
  users: [],
};

const getters = {
  [types.GET_USER_DETAIL]: (state) => state.user,
  [types.GET_ALL_USERS]: (state) => state.users,
};

const mutations = {
  [types.SET_USER_DETAIL]: (state, payload) => {
    state.user = payload;
  },
  [types.SET_ALL_USERS]: (state, payload) => {
    state.users = payload;
  },
};

const actions = {
  // Setting all users
  [types.GET_ALL_USERS_ACTION]: ({ commit }) => {
    const url = "/users";
    axios
      .get(url)
      .then((response) => {
        commit(types.SET_ALL_USERS, response.users);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single goal data
  [types.GET_GOAL_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/users/${id}`;
    axios
      .get(url)
      .then((response) => {
        commit(types.SET_USER_DETAIL, response.user);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
