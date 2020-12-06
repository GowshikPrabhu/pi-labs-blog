const express = require('express');
const router = express.Router();
const {
  getBlog,
  getBlogs,
  getFeaturedBlogs,
  createBlog,
  editBlog,
  deleteBlog,
  getBlogContent
} = require('../../controllers/blogs');
const Blog = require('../../models/Blog');
const advancedResults = require('../../middlewares/advancedResults');
const passport = require('passport');

router
  .route('/')
  .get(advancedResults(Blog), getBlogs)
  .post(passport.authenticate('jwt', { session: false }), createBlog);
router.route('/featured').get(getFeaturedBlogs);
router
  .route('/:id')
  .get(getBlog)
  .put(passport.authenticate('jwt', { session: false }), editBlog)
  .delete(passport.authenticate('jwt', { session: false }), deleteBlog);

module.exports = router;
