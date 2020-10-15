const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const multer = require('multer');
const storage = require('./utils/storage');

// Setup dotenv file for development
dotenv.config({ path: './config/config.env' });

connectDB();

// Routes
const blogs = require('./routes/v1/blogs');

const app = express();

// Middleware
app.use(express.json());
const upload = multer({ storage: storage });

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('common'));
}
// setup routes
app.use('/api/v1/blogs', upload.single('file'), blogs);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running MODE:${process.env.NODE_ENV} PORT:${PORT}`)
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
