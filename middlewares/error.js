const ErrorResponse = require('../utils/error');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  let message = 'Server Error';

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    message = `Can't find blog with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    message = `Duplicate field value entered.`;
    error = new ErrorResponse(message, 400);
  }

  // Validation error
  if (err.name === 'ValidationError') {
    message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
