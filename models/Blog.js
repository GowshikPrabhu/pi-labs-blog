const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 80
  },
  description: {
    type: String,
    required: true,
    maxlength: 250
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  readTime: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
