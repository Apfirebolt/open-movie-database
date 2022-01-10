import * as types from "./movie-types";
import events from "../../../plugins/events";
import interceptor from "../../../plugins/interceptor";
// import axios from "axios";

const state = {
  movie: null,
  movies: [],
};

const getters = {
  [types.GET_MOVIE_DETAIL]: (state) => state.movie,
  [types.GET_ALL_MOVIES]: (state) => state.movies,
};

const mutations = {
  [types.SET_MOVIE_DETAIL]: (state, payload) => {
    state.movie = payload;
  },
  [types.SET_ALL_MOVIES]: (state, payload) => {
    state.movies = payload;
  },
};

const actions = {
  // Create Movie Action
  [types.CREATE_MOVIE_ACTION]: ({ commit }, payload) => {
    const url = "/movie";
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Movie added successfully",
            type: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all movies
  [types.GET_ALL_MOVIES_ACTION]: ({ commit }) => {
    const url = "/movie";
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_ALL_MOVIES, response.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single movie data
  [types.GET_MOVIE_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/movie/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_MOVIE_DETAIL, response.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete an movie
  [types.DELETE_MOVIE_ACTION]: ({ commit }, id) => {
    const url = `/movie/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Movie deleted successfully",
            type: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update an movie
  [types.UPDATE_EXPENSE_ACTION]: ({ commit }, payload) => {
    const url = `/movie/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Movie updated successfully",
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
