const db = require("../models");
// const { encryptPassword, comparePassword } = require("../utils/password-hash");

// Sign in
async function signIn(req, res) {
  try {
    const { email } = req.client;
    // console.log(email, uid);

    const data = await db.Client.findOne(
      {
        email: email,
      },
      { _id: 1 },
    );
    // const hashedPassword = await db.Client.findOne(
    //   { email: email },
    //   { password: 1, _id: 0 },
    // );
    res.status(200).send({ message: "Successfully signed in", userId: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// Sign up
async function signUp(req, res) {
  try {
    const { firstName } = req.body;
    const { email, uid } = req.client;

    const data = await db.Client.create({
      firstName: firstName,
      email: email,
      firebase_id: uid,
    });
    res
      .status(200)
      .send({ message: "Successfully signed up", userId: data._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET client
async function getById(req, res) {
  try {
    const { id } = req.params;
    const data = await db.Client.findOne({ _id: id });
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH client
async function updateById(req, res) {
  try {
    const { id } = req.params;
    const {
      address,
      city,
      country,
      email,
      firstName,
      lastName,
      zipCode,
      phoneNumber,
    } = req.body.client;
    const data = await db.Client.findByIdAndUpdate(
      id,
      {
        address: address,
        city: city,
        country: country,
        email: email,
        firstName: firstName,
        lastName: lastName,
        zipCode: zipCode,
        phoneNumber: phoneNumber,
      },
      { new: true },
    );
    console.log(data);
    res.status(200).send({ id: id, message: "Success" });
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
