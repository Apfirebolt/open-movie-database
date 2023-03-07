import express from 'express'
const router = express.Router()
import {
  createMovie,
  updateMovie,
  getAllMovies,
  getMovieDetail,
  deleteMovie
} from '../controllers/movie-controller.js'
import { protect } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, createMovie)
  .get(protect, getAllMovies)

router
  .route('/:id')
  .get(protect, getMovieDetail)
  .put(protect, updateMovie)
  .delete(protect, deleteMovie)

export default router
