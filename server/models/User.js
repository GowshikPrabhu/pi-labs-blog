const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 8
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash the password before saving to DB
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  let salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

// Method to verify password
UserSchema.methods.verifyPassword = async function (givenPassword) {
  return await bcryptjs.compare(givenPassword, this.password);
};

// Generate JWT token
UserSchema.methods.getJwtToken = async function () {
  let payloads = {
    sub: this._id,
    name: this.name,
    iat: new Date().getTime(),
    exp: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30).getTime()
  };

  return jwt.sign(payloads, process.env.JWT_SIG_KEY_PRIV, { expiresIn: '30d' });
};

module.exports = mongoose.model('User', UserSchema);
