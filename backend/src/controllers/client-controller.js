const db = require("../models");
// const { encryptPassword, comparePassword } = require("../utils/password-hash");

// Sign in
async function signIn(req, res, next) {
  try {
    const { email, uid } = req.body;
    console.log(email, uid);
    // const hashedPassword = await db.Client.findOne(
    //   { email: email },
    //   { password: 1, _id: 0 },
    // );

    res.status(200).send({ message: "Successfully signed in" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// Sign up
async function signUp(req, res) {
  try {
    const { firstName } = req.body;
    const { email, uid } = req.client;

    await db.Client.create({
      firstName: firstName,
      email: email,
      firebase_id: uid,
    });
    res.status(200).send({ message: "Successfully signed up" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET client
async function getById(req, res) {
  try {
    const { id } = req.params;
    console.log(arguments.callee.toString());
    res.status(200).send({ id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH client
async function updateById(req, res) {
  try {
    const { id } = req.params;
    console.log(arguments.callee.toString());
    res.status(200).send({ id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// POST client
async function add(req, res) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  signIn: signIn,
  signUp: signUp,
  getById: getById,
  updateById: updateById,
  add: add,
};
