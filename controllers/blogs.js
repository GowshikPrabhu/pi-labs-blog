const Blog = require('../models/Blog');
const asyncHandler = require('../middlewares/async');

exports.getBlogs = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.getBlog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.getFeaturedBlogs = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.createBlog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.editBlog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.deleteBlog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});
