const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator() {
  const payload = {
    user: user_id
  }
  return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "24hr"})
}

module.exports = jwtGenerator;