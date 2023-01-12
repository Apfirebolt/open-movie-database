<template>
  <div>
    <search-movie-form :searchMovie="getMovieData" :loading="isLoading" />\
    <b-modal v-model="isModalOpened" :width="640" scroll="keep">
      <movie-card :movieData="movieData" />
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import SearchMovieForm from "@/components/SearchInput.vue";
import MovieCard from "@/components/MovieCard.vue";

export default {
  data() {
    return {
      movieData: null,
      isLoading: false,
      isModalOpened: false,
    };
  },
  components: {
    SearchMovieForm,
    MovieCard,
  },
  methods: {
    async getMovieData(movieName) {
      const apiKey = process.env.VUE_APP_API_KEY;
      this.isLoading = true;
      const movieResponse = await axios.get(
        `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
      );
      this.movieData = movieResponse.data;
      this.isModalOpened = true;
      console.log(movieResponse);
      this.isLoading = false;
    },
  },
};
</script>
