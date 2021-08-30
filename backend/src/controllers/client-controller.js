const db = require("../models");

// GET client
async function getById(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH client
async function updateById(req, res, next) {
  try {
    console.log(arguments.callee.toString());
    res.status(200).send({});
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
  getById: getById,
  updateById: updateById,
  add: add,
};
