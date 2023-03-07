import asyncHandler from "express-async-handler";
import Movie from "../models/Movie.js";

// @desc    Save a movie from OMDB API
// @route   POST /api/movie
// @access  Private
const createMovie = asyncHandler(async (req, res) => {
  const {
    title,
    year,
    rated,
    released,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    ratings,
    imdbVotes,
    imdbRatings,
    imdbId,
    collection,
  } = req.body;
  const movie = await Movie.create({
    title,
    year,
    rated,
    released,
    genre,
    director,
    writer, 
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    ratings,
    imdbVotes,
    imdbRatings,
    imdbId,
    collection,
    createdBy: req.user._id,
  });
  if (movie) {
    res.status(201).json(movie);
  } else {
    res.status(400);
    throw new Error("Invalid Movie data");
  }
});

// @desc    Update an existing Movie
// @route   PATCH /api/movie/:id
// @access  Private
const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  if (movie) {
    res.json(movie);
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
});

// @desc    Get details for a single Movie
// @route   GET /api/movie/:id
// @access  Private
const getMovieDetail = asyncHandler(async (req, res) => {
  const movie = await Movie.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (movie) {
    res.json(movie);
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
});

// @desc    Get all user saved Movies
// @route   PUT /api/movie
// @access  Private
const getAllMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({
    createdBy: req.user._id,
  });
  res.json(movies);
});

// @desc    Delete saved movie by user
// @route   DELETE /api/movie/:id
// @access  Private
const deleteMovie = asyncHandler(async (req, res) => {
  const isMovieDeleted = await Movie.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isMovieDeleted) {
    res.json({
      message: "Movie deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
});

export {
  createMovie,
  updateMovie,
  deleteMovie,
  getAllMovies,
  getMovieDetail,
};
