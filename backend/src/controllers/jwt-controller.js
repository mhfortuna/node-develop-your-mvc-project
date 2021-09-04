const db = require("../models");
const randToken = require("rand-token");
const { comparePassword } = require("../utils/password-hash");
const { generateAccessToken } = require("../services/jwt");
const { session } = require("../session");

async function signIn(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await db.Employee.findOne({ email }).lean();
    if (!user) return res.status(400).send({ message: "User not registered!" });

    const pass = await comparePassword(password, user.password);
    if (!pass)
      return res.status(401).send({ message: "Invalid email or password!" });

    const accessToken = generateAccessToken(email);
    const refreshToken = randToken.uid(256);

    session.refreshTokens[refreshToken] = email;

    return res.status(200).send({
      email,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(401).send({ message: err.message });
    next(err);
  }
}

async function updateAccessToken(req, res, next) {
  const { email, refreshToken } = req.body;

  try {
    if (!email || !refreshToken)
      res.status(400).send({ message: "Email and refresh token are required" });

    if (
      refreshToken in session.refreshTokens &&
      session.refreshTokens[refreshToken] == email
    ) {
      const accessToken = generateAccessToken(email);

      if (accessToken)
        return res.status(200).send({ accessToken, refreshToken });
    }

    res.status(500).send({ message: "Can't generate your access token" });
  } catch (err) {
    res.status(400).send({ message: err.message });
    next(err);
  }
}

async function rejectToken(req, res, next) {
  const { refreshToken } = req.body;

  try {
    if (!refreshToken)
      return res.status(400).send({ message: "Param refreshToken required" });

    if (refreshToken in session.refreshTokens) {
      delete session.refreshTokens[refreshToken];
      return res.status(200).send({ message: "Goodbye!" });
    }

    return res.status(501).send({ error: "refresh token not found!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
    next(err);
  }
}

module.exports = { signIn, updateAccessToken, rejectToken };
