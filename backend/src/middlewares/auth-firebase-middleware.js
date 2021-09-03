const { getAuthToken, verifyAuthToken } = require("../services/firebase");
const db = require("../models");

async function authFirebaseMiddleware(req, res, next) {
  try {
    const bearerToken = await getAuthToken(req.headers);
    const clientClaims = await verifyAuthToken(bearerToken); // returns client email

    const client = await db.Client.findOne({
      email: clientClaims.email,
    });

    if (!client) {
      throw new Error("Invalid token");
    }

    req.client = {
      email: clientClaims.email,
      id: client._id,
    };

    next();
  } catch (error) {
    res.status(401).send({
      data: null,
      error: error,
    });
  }
}

module.exports = {
  authFirebaseMiddleware: authFirebaseMiddleware,
};
