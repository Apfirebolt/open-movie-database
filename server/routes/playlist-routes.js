import express from 'express'
const router = express.Router()
import {
  createPlaylist,
  updatePlaylist,
  getAllPlaylist,
  getPlaylistDetail,
  deletePlaylist
} from '../controllers/playlist-controller.js'
import { protect } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, createPlaylist)
  .get(protect, getAllPlaylist)

router
  .route('/:id')
  .get(protect, getPlaylistDetail)
  .put(protect, updatePlaylist)
  .delete(protect, deletePlaylist)

export default router
