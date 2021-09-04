const db = require("../models");
const { getAuthToken, verifyAuthToken } = require("../services/jwt");

async function checkJwtToken(req, res, next) {
  try {
    const bearerToken = await getAuthToken(req.headers);
    const { email } = await verifyAuthToken(bearerToken);

    const user = await db.Employee.findOne({ email }, { password: 0 });

    if (!user)
      return res.status(404).send({ message: "User token not found!" });

    // req.userEmail = email;
    req.employee = { email };

    next();
  } catch (err) {
    res.status(403).send({ message: err.message });
    next(err);
  }
}

async function isAdmin(req, res, next) {
  const { email } = req.employee;

  try {
    const user = await db.Employee.findOne({ email }, { password: 0 }).lean();

    if (!user.isAdmin)
      return res.status(400).send({ message: "Must be an admin" });
    else next();
  } catch (err) {
    res.status(400).send({ message: err.message });
    next(err);
  }
}

module.exports = { checkJwtToken, isAdmin };
