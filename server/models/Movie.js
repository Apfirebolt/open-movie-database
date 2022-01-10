import mongoose from "mongoose";

const ratingSchema = mongoose.Schema(
  {
    source: { type: String, required: true },
    value: { type: String, required: true },
  },
)

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rated: {
      type: String,
      required: true,
    },
    released: {
      type: String,
      required: false,
    },
    genre: {
      type: String,
      required: false,
    },
    director: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: false,
    },
    actors: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    awards: {
      type: String,
      required: false,
    },
    poster: {
      type: String,
      required: false,
    },
    ratings: [ratingSchema],
    imdbVotes: {
      type: Number,
      required: true,
    },
    imdbRatings: {
      type: Number,
      required: true,
    },
    imdbId: {
      type: String,
      required: false
    },
    collection: {
      type: String,
      required: false
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
