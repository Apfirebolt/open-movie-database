<template>
  <card-component>
    <form @submit.prevent="submit">
      <b-field
        horizontal
        label="Search Movie By Name"
        message="Required. Movie Name cannot be empty"
      >
        <b-input v-model="movieName" name="movieName" type="text" required />
      </b-field>
      <hr />
      <b-field horizontal>
        <div class="control">
          <button
            type="submit"
            class="button is-primary"
            :class="{ 'is-loading': loading }"
          >
            Search Movie
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import CardComponent from "@/components/CardComponent";
export default {
  name: "LoginForm",
  components: {
    CardComponent,
  },
  props: {
    searchMovie: {
      type: Function,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      movieName: "",
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.searchMovie(this.movieName);
    },
  },
};
</script>
