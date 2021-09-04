const jwt = require("jsonwebtoken");
const { config } = require("../../config");

function generateAccessToken(email) {
  // 86400: 24 hours
  return jwt.sign({ email }, config.jwt.SECRET, { expiresIn: 86400 });
}

module.exports = { generateAccessToken };
