import express from 'express'
const router = express.Router()
import {
  getAllUsers,
  getUserById
} from '../controllers/user-controller.js'
import { protect } from '../middleware/authMiddleware.js'

router
  .route('/')
  .get(getAllUsers)

router
  .route('/:id')
  .get(protect, getUserById)

export default router
