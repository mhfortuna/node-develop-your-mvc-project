const db = require("../models");

// GET employee
async function getById(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH employee
async function updateById(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// DELETE employee
async function deleteById(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET all
async function getAll(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// POST employee
async function add(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
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
