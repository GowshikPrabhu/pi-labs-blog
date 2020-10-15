const express = require('express');
const router = express.Router();
const {
  getBlog,
  getBlogs,
  getFeaturedBlogs,
  createBlog,
  editBlog,
  deleteBlog
} = require('../../controllers/blogs');
const Blog = require('../../models/Blog');
const advancedResults = require('../../middlewares/advancedResults');

router.route('/').get(advancedResults(Blog), getBlogs).post(createBlog);
router.route('/featured').get(getFeaturedBlogs);
router.route('/:id').get(getBlog).put(editBlog).delete(deleteBlog);

module.exports = router;
