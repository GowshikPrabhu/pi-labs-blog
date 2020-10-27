const JwtStrategy = require('passport-jwt').JwtStrategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SIG_KEY_PUB,
  algorithms: ['RS256'],
  ignoreExpiration: false,
  passReqToCallback: false,
  jsonWebTokenOptions: {
    complete: false,
    maxAge: '30d'
  }
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, function (jwt_payload, done) {
      User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
