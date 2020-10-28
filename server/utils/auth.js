const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const privateKeyPath = path.join(__dirname, '..', '/config', 'jwtRS256.key');
const PRIVATE_KEY = fs.readFileSync(privateKeyPath, 'utf8');

const getSignedJwtToken = (user) => {
  let payload = {
    sub: user._id,
    name: user.name,
    iat: new Date().getTime()
  };

  const token = jwt.sign(payload, PRIVATE_KEY, {
    expiresIn: '30d',
    algorithm: 'RS256'
  });

  return {
    token: token,
    expires: '30d'
  };
};

module.exports.getSignedJwtToken = getSignedJwtToken;
