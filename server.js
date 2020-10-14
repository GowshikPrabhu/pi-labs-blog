const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Setup dotenv file for development
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// Middleware
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('common'));
}

app.get('/', (req, res) => {
  res.send('Hello world');
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running MODE:${process.env.NODE_ENV} PORT:${PORT}`)
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
