const db = require("../models");

// POST order
async function add(req, res) {
  try {
    const addedOrder = await db.Order.create(req.body);

    res.status(200).send({ message: "Successfully added", id: addedOrder._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  add: add,
};
