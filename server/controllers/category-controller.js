import asyncHandler from "express-async-handler";
import Category from "../models/Category.js";

// @desc    Create a category
// @route   POST /api/category
// @access  Private
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({
    name,
    createdBy: req.user._id,
  });
  if (category) {
    res.status(201).json(category);
  } else {
    res.status(400);
    throw new Error("Invalid Category data");
  }
});

// @desc    Update an existing Category
// @route   PATCH /api/category/:id
// @access  Private
const updateCategory = asyncHandler(async (req, res) => {

  const category = await Category.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// @desc    Get details for a single Goal profile
// @route   GET /api/category/:id
// @access  Private
const getCategoryDetail = asyncHandler(async (req, res) => {
  const category = await Category.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (category) {
    res.json({
      category,
    });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// @desc    Get all user Categories
// @route   PUT /api/category
// @access  Private
const getAllCategory = asyncHandler(async (req, res) => {
  const categories = await Category.find({
    createdBy: req.user._id,
  });
  res.json({
    categories,
  });
});

// @desc    Delete user Category
// @route   DELETE /api/category/:id
// @access  Private
const deleteCategory = asyncHandler(async (req, res) => {
  const isCategoryDeleted = await Category.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isCategoryDeleted) {
    res.json({
      message: "Category deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

export { createCategory, updateCategory, deleteCategory, getAllCategory, getCategoryDetail };
