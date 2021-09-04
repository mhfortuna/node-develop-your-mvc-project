const db = require("../models");

// Sign in
async function signIn(req, res) {
  try {
    const { email } = req.client;

    const data = await db.Client.findOne(
      {
        email: email,
      },
      { _id: 1 },
    );

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
    // const { id } = req.params;
    const { email } = req.client;

    // const data = await db.Client.findOne({ _id: id });
    const data = await db.Client.findOne({ email });
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH client
async function updateById(req, res) {
  try {
    // const { id } = req.params;
    const { authEmail } = req.client;
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
    // const data = await db.Client.findByIdAndUpdate(
    //   id,
    //   {
    //     address: address,
    //     city: city,
    //     country: country,
    //     email: email,
    //     firstName: firstName,
    //     lastName: lastName,
    //     zipCode: zipCode,
    //     phoneNumber: phoneNumber,
    //   },
    //   { new: true },
    // );
    const { _id } = await db.Client.findOneAndUpdate(
      { authEmail },
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
    res.status(200).send({ id: _id, message: "Success" });
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
