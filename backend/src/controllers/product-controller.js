const db = require("../models");

// GET product
async function getById(req, res, next) {
  const { id } = req.params;
  try {
    const foundProduct = await db.Product.findById(id).lean();
    res.status(200).send({ foundProduct: foundProduct });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH product
async function updateById(req, res, next) {
  const { id } = req.params;
  try {
    const updatedProduct = await db.Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      message: "Successfully updated",
      updatedProduct: updatedProduct,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// DELETE product
async function deleteById(req, res, next) {
  const { id } = req.params;
  try {
    const deletedProduct = await db.Product.findByIdAndDelete(id);
    res.status(200).send({ message: "Successfully deleted", id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET all
async function getAll(req, res, next) {
  try {
    const foundProducts = await db.Product.find({}).lean();
    res.status(200).send({ foundProducts: foundProducts });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// POST product
async function add(req, res, next) {
  const { title, images, description, price, unitsInStock, lens } = req.body;
  try {
    const addedProduct = await db.Product.create({
      title: title,
      images: images,
      description: description,
      price: price,
      unitsInStock: unitsInStock,
      lens: lens,
    });
    res
      .status(200)
      .send({ message: "Successfully added", id: addedProduct._id });
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
