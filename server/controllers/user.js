const User = require('../models/User');
const { getSignedJwtToken } = require('../utils/auth');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/error');

exports.registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const su_key = req.headers.su_key;

  if (su_key !== process.env.SU_KEY) {
    return next(
      new ErrorResponse("Your don't have authorization for this action")
    );
  }

  const user = await User.create({ name, email, password });
  sendTokenResponse(user, 200, res);
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  const user = await User.findOne({ email: email });
  // Check for user
  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }
  // Check if the password matches
  const isValid = await user.verifyPassword(password);
  if (!isValid) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

const sendTokenResponse = (user, statusCode, res) => {
  const tokenObject = getSignedJwtToken(user);
  console.log(tokenObject);

  //  --Used when token is set in cookie
  // const options = {
  //   expires: new Date(
  //     Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: true
  // };
  // if (process.env.NODE_ENV === 'production') {
  //   options.secure = true;
  // }

  res.status(statusCode).json({ success: true, date: tokenObject });
};
