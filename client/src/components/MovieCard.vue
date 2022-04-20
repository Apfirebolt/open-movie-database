<template>
  <div v-if="movieData" class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="movieData.Poster" alt="Image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media-content">
        <p class="title is-4">{{ movieData.Title }}</p>
        <p class="subtitle is-6">Released in {{ movieData.Released }}</p>
      </div>

      <div class="content my-3">
        <h3 class="mt-3">Plot</h3>
        <p>{{ movieData.Plot }}</p>
        <h3 v-if="movieData.Genre" class="mt-3">Genre</h3>
        <p>{{ movieData.Genre }}</p>
        <h3 v-if="movieData.Director" class="mt-3">Director</h3>
        <p>{{ movieData.Director }}</p>
        <h3 v-if="movieData.Writer" class="mt-3">Writer</h3>
        <p>{{ movieData.Writer }}</p>
        {{ movieData }}
        <br />
        <small>Rated {{ movieData.imdbRating }} with {{ movieData.imdbVotes }} votes on IMDB</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
};
</script>
