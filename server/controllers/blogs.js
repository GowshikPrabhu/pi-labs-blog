const Blog = require('../models/Blog');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/error');
const getBlobName = require('../utils/fileNamer');
const getStream = require('into-stream');
const { BlobServiceClient } = require('@azure/storage-blob');

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

/**
 * @apidoc
 *
 * route: /blogs
 * method: POST
 * description: Create a new blog post
 * parameters: title-string, author-string, readTime-Number, description-string, blogFile-File
 * response:
 *   - 200 {status: true, data: BlogObject}
 *   - 400 {status: false, error: String}
 */
exports.createBlog = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }
  const file = req.file;
  if (file.mimetype !== 'text/html') {
    return next(new ErrorResponse('Please upload a valid file', 400));
  }

  const blobName = getBlobName(req.file.originalname, req.body.author);
  const fileStream = getStream(req.file.buffer);

  // Create storage connection and connect container and blob
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.STORAGE_URI
  );
  const containerClient = blobServiceClient.getContainerClient('blog-posts');
  const blobClient = containerClient.getBlockBlobClient(blobName);

  const ONE_MB = 1024 * 1024;
  await blobClient.uploadStream(fileStream, ONE_MB, 5, {
    blobHTTPHeaders: { blobContentType: 'text/html' }
  });

  req.body.fileName = blobName;

  const blog = await Blog.create(req.body);

  res.status(201).json({ success: true, data: blog });
});

/**
 * @apidoc
 *
 * route: /blogs/:id
 * method: PUT
 * description: Edit a blog post
 * parameters: title?-string, author?-string, readTime?-Number, description?-string, blogFile?-File
 * response:
 *   - 200 {status: true, data: BlogObject}
 *   - 400 {status: false, error: String}
 *   - 404 {status: false, error: String}
 */
exports.editBlog = asyncHandler(async (req, res, next) => {
  const blogID = req.params.id;

  let blog = await Blog.findById(blogID);

  if (!blog) {
    return next(
      new ErrorResponse(`No blog is found with id ${err.params.id}`, 404)
    );
  }

  const fileName = blog.fileName;
  const fileStream = getStream(req.file.buffer);

  // Create storage connection and connect container and blob
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.STORAGE_URI
  );
  const containerClient = blobServiceClient.getContainerClient('blog-posts');
  const blobClient = containerClient.getBlockBlobClient(fileName);

  const ONE_MB = 1024 * 1024;
  await blobClient.uploadStream(fileStream, ONE_MB, 5, {
    blobHTTPHeaders: { blobContentType: 'text/html' }
  });

  blog = await Blog.findByIdAndUpdate(blogID, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: blog });
});

/**
 * @apidoc
 *
 * route: /blogs/:id
 * method: DELETE
 * description: Delete a blog post
 * response:
 *   - 200 {status: true, data: {}}
 *   - 400 {status: false, error: String}
 *   - 404 {status: false, error: String}
 */
exports.deleteBlog = asyncHandler(async (req, res, next) => {
  const blogID = req.params.id;

  const blog = await Blog.findById(blogID);

  if (!blog) {
    return next(
      new ErrorResponse(`No blog is found with id ${err.params.id}`),
      404
    );
  }

  const fileName = blog.fileName;
  // Create storage connection and connect container and blob
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.STORAGE_URI
  );
  const containerClient = blobServiceClient.getContainerClient('blog-posts');
  const blobClient = containerClient.getBlockBlobClient(fileName);

  let response = await blobClient.deleteIfExists({
    deleteSnapshots: 'include'
  });

  if (response.succeeded) {
    console.log('Successfully deleted');
  } else if (response.errorCode) {
    console.log(response.errorCode);
    return next(new ErrorResponse('Cannot delete the file', 400));
  }

  blog.remove();
  res.status(200).json({ success: true, data: {} });
});
