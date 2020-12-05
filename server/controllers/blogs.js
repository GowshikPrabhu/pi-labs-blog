const Blog = require('../models/Blog');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/error');
const fs = require('fs');
const path = require('path');

/**
 * @apidoc
 *
 * route: /blogs
 * method: GET
 * description: Get all blogs
 * response:
 *   - 200 {status: bool, data: {success: true, count: Number, pagination: Object, data: Array}}
 */
exports.getBlogs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @apidoc
 *
 * route: /blogs/:id
 * method: GET
 * description: Get a blog by ID
 * response:
 *   - 200 {status: true, data: BlogObject}
 *   - 404 {status: false, error: String}
 */
exports.getBlog = asyncHandler(async (req, res, next) => {
  const blogID = req.params.id;

  const blog = await Blog.findById(blogID);

  if (!blog) {
    return next(new ErrorResponse(`No blog is found with id ${err.params.id}`));
  }

  res.status(200).json({ success: true, data: blog });
});

/**
 * @apidoc
 *
 * route: /blogs/featured
 * method: GET
 * description: Get featured blogs
 * response:
 *   - 200 {status: true, data: BlogObject}
 */
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

exports.getBlogContent = asyncHandler(async (req, res, next) => {
  let fname = req.params.filename;
  res.download(`./postfiles/${fname}`, 'content.md');
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

  let filePath = path.join(__dirname, '..', 'postfiles', blog.content);
  console.log(filePath);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(400).json({ success: false, error: 'Cannor remove the file' });
      return;
    }
    console.log('File is removed');
  });

  blog.remove();
  res.status(200).json({ success: true, data: {} });
});
