const db = require("../models");
const { encryptPassword, comparePassword } = require("../utils/password-hash");

// Sign in
async function signIn(req, res, next) {
  try {
    const { email, password } = req.body;

    const hashedPassword = await db.Client.findOne(
      { email: email },
      { password: 1, _id: 0 },
    );

    res.status(200).send({ message: "Successfully signed in" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET client
async function getById(req, res, next) {
  try {
    const { id } = req.params;
    console.log(arguments.callee.toString());
    res.status(200).send({ id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH client
async function updateById(req, res, next) {
  try {
    const { id } = req.params;
    console.log(arguments.callee.toString());
    res.status(200).send({ id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// POST client
async function add(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  signIn: signIn,
  getById: getById,
  updateById: updateById,
  add: add,
};
