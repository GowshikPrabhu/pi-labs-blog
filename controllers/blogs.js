const Blog = require('../models/Blog');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/error');

exports.getBlogs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getBlog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.getFeaturedBlogs = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.createBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.create(req.body);

  res.status(201).json({ success: true, data: blog });
});

exports.editBlog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});

exports.deleteBlog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: {} });
});
