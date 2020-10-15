const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const multer = require('multer');
const storage = require('./utils/storage');
const errorHandler = require('./middlewares/error');

// Setup dotenv file for development
dotenv.config({ path: './config/config.env' });

connectDB();

// Routes
const blogs = require('./routes/v1/blogs');

const app = express();

// Middleware
const upload = multer({ storage: storage });

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('common'));
}
// setup routes
app.use('/api/v1/blogs', upload.single('file'), blogs);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(
    '\x1b[44m%s\x1b[0m',
    `Server running MODE:${process.env.NODE_ENV} PORT:${PORT}`
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
