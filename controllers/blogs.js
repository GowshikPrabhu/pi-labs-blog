const Blog = require('../models/Blog');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/error');

exports.getBlogs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getBlog = asyncHandler(async (req, res, next) => {
  const blogID = req.params.id;

  const blog = await Blog.findById(blogID);

  if (!blog) {
    return next(new ErrorResponse(`No blog is found with id ${err.params.id}`));
  }

  res.status(200).json({ success: true, data: blog });
});

exports.getFeaturedBlogs = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find({ featured: true });

  res.status(200).json({ success: true, data: blogs });
});

exports.createBlog = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }
  const file = req.file;
  if (file.mimetype !== 'text/markdown') {
    return next(new ErrorResponse('Please upload an markdown file', 400));
  }

  req.body.content = req.file.filename;

  const blog = await Blog.create(req.body);

  res.status(201).json({ success: true, data: blog });
});

exports.editBlog = asyncHandler(async (req, res, next) => {
  const blogID = req.params.id;

  let blog = await Blog.findById(blogID);

  if (!blog) {
    return next(new ErrorResponse(`No blog is found with id ${err.params.id}`));
  }

  blog = await Blog.findByIdAndUpdate(blogID, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: blog });
});

exports.deleteBlog = asyncHandler(async (req, res, next) => {
  const blogID = req.params.id;

  const blog = await Blog.findById(blogID);

  if (!blog) {
    return next(new ErrorResponse(`No blog is found with id ${err.params.id}`));
  }

  blog.remove();
  res.status(200).json({ success: true, data: {} });
});
