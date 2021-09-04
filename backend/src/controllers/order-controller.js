const db = require("../models");

const { syncUnitsInStock } = require("./product-controller");

// POST order
async function add(req, res) {
  try {
    const { products } = req.body;
    const addedOrder = await db.Order.create(req.body);

    products.forEach(async (element) => {
      await syncUnitsInStock(element);
    });

    res.status(200).send({ message: "Successfully added", id: addedOrder._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  add: add,
};
