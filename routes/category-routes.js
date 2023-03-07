import express from 'express'
const router = express.Router()
import {
  createCategory,
  updateCategory,
  getAllCategory,
  getCategoryDetail,
  deleteCategory
} from '../controllers/category-controller.js'
import { protect } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, createCategory)
  .get(protect, getAllCategory)

router
  .route('/:id')
  .get(protect, getCategoryDetail)
  .put(protect, updateCategory)
  .delete(protect, deleteCategory)

export default router
