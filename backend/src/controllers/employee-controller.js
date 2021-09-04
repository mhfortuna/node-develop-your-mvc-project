const db = require("../models");
const { encryptPassword } = require("../utils/password-hash");

// Sign in
async function signIn(req, res, next) {
  try {
    const { email, password } = req.body;
    res.status(200).send({ message: "Successfully signed in" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET employee
async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const foundEmployee = await db.Employee.findById(id).lean();
    res.status(200).send({ foundEmployee: foundEmployee });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH employee
async function updateById(req, res, next) {
  try {
    const { id } = req.params;
    const { fullName, email, isAdmin } = req.body.employee;
    const data = await db.Employee.findByIdAndUpdate(
      id,
      {
        fullName: fullName,
        email: email,
        isAdmin: isAdmin,
      },
      { new: true },
    );
    res.status(200).send({
      message: "Successfully updated",
      data: data,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// DELETE employee
async function deleteById(req, res, next) {
  try {
    const { id } = req.params;
    const deletedEmployee = await db.Employee.findByIdAndDelete(id);
    res.status(200).send({ message: "Successfully deleted", id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET all
async function getAll(req, res, next) {
  try {
    const foundEmployees = await db.Employee.find({}).lean();
    res.status(200).send({ foundEmployees: foundEmployees });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// POST employee
async function add(req, res, next) {
  try {
    const { fullName, email, password, isAdmin, profileImage } = req.body;
    const encryptedPassword = await encryptPassword(password);
    const addedEmployee = await db.Employee.create({
      fullName: fullName,
      email: email,
      password: encryptedPassword,
      isAdmin: isAdmin,
      profileImage: profileImage,
    });
    res
      .status(200)
      .send({ message: "Successfully added", id: addedEmployee._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  signIn: signIn,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
  getAll: getAll,
  add: add,
};
