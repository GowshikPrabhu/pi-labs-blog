const User = require('../models/User');
const { getSignedJwtToken } = require('../utils/auth');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/error');

exports.registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });
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
