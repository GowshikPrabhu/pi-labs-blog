const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    maxlength: 80
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: 250
  },
  author: {
    type: String,
    required: [true, 'Author name is required']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  readTime: {
    type: Number,
    required: [true, 'Mention read time']
  },
  content: {
    type: String
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
