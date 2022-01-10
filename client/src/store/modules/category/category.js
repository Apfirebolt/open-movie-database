import * as types from "./category-types";
import events from "../../../plugins/events";
import interceptor from "../../../plugins/interceptor";

const state = {
  category: null,
  categories: [],
};

const getters = {
  [types.GET_CATEGORY_DETAIL]: (state) => state.category,
  [types.GET_ALL_CATEGORY]: (state) => state.categories,
};

const mutations = {
  [types.SET_CATEGORY_DETAIL]: (state, payload) => {
    state.category = payload;
  },
  [types.SET_ALL_CATEGORY]: (state, payload) => {
    state.categories = payload;
  },
};

const actions = {
  // Create category Action
  [types.CREATE_CATEGORY_ACTION]: ({ commit }, payload) => {
    const url = "/category";
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Category added successfully",
            type: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all categories
  [types.GET_ALL_CATEGORY_ACTION]: ({ commit }) => {
    const url = "/category";
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_ALL_CATEGORY, response.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single category data
  [types.GET_CATEGORY_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/category/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_CATEGORY_DETAIL, response.category);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete category
  [types.DELETE_CATEGORY_ACTION]: ({ commit }, id) => {
    const url = `/category/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Category deleted successfully",
            type: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update a category
  [types.UPDATE_CATEGORY_ACTION]: ({ commit }, payload) => {
    const url = `/category/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Category updated successfully",
            type: "success",
          });
        }
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
