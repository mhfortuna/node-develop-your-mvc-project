const db = require("../models");

// GET product
async function getById(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({ id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH product
async function updateById(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// DELETE product
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

// POST product
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
