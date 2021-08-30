const db = require("../models");

// GET employee
async function getById(req, res, next) {
  const { id } = req.params;
  try {
    const foundEmployee = await db.Employee.findById(id).lean();
    res.status(200).send({ foundEmployee: foundEmployee });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH employee
async function updateById(req, res, next) {
  const { id } = req.params;
  try {
    const updatedEmployee = await db.Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      message: "Successfully updated",
      updatedEmployee: updatedEmployee,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// DELETE employee
async function deleteById(req, res, next) {
  const { id } = req.params;
  try {
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
  const { fullName, email, password, isAdmin, profileImage } = req.body;
  try {
    const addedEmployee = await db.Employee.create({
      fullName: fullName,
      email: email,
      password: password,
      isAdmin: isAdmin,
      profileImage,
    });
    res
      .status(200)
      .send({ message: "Successfully added", id: addedEmployee._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
  getAll: getAll,
  add: add,
};
