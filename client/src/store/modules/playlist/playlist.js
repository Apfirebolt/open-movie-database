import * as types from "./playlist-types";
import events from "../../../plugins/events";
import interceptor from "../../../plugins/interceptor";

const state = {
  playlist: null,
  playlists: [],
};

const getters = {
  [types.GET_PLAYLIST_DETAIL]: (state) => state.playlist,
  [types.GET_ALL_PLAYLIST]: (state) => state.playlists,
};

const mutations = {
  [types.SET_PLAYLIST_DETAIL]: (state, payload) => {
    state.playlist = payload;
  },
  [types.SET_ALL_PLAYLIST]: (state, payload) => {
    state.playlists = payload;
  },
};

const actions = {
  // Create Playlist Action
  [types.CREATE_PLAYLIST_ACTION]: ({ commit }, payload) => {
    const url = "/playlist";
    interceptor
      .post(url, payload)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Playlist added successfully",
            type: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Setting all playlist
  [types.GET_ALL_PLAYLIST_ACTION]: ({ commit }) => {
    const url = "/playlist";
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_ALL_PLAYLIST, response.playlists);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Set single playlist data
  [types.GET_PLAYLIST_DETAIL_ACTION]: ({ commit }, id) => {
    const url = `/playlist/${id}`;
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_PLAYLIST_DETAIL, response.playlist);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Delete a playlist
  [types.DELETE_PLAYLIST_ACTION]: ({ commit }, id) => {
    const url = `/playlist/${id}`;
    interceptor
      .delete(url)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Playlist deleted successfully",
            type: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Update a playlist
  [types.UPDATE_PLAYLIST_ACTION]: ({ commit }, payload) => {
    const url = `/playlist/${payload._id}`;
    interceptor
      .patch(url, payload)
      .then((response) => {
        if (response) {
          events.emit("add_toast", {
            content: "Playlist updated successfully",
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
