const db = require("../models");

// GET product
async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const foundProduct = await db.Product.findById(id).lean();
    res.status(200).send({ foundProduct: foundProduct });
  } catch (error) {
    res.status(500).send({ error: error.message });
    next(error);
  }
}

// PATCH product
async function updateById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedProduct = await db.Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      message: "Successfully updated",
      updatedProduct: updatedProduct,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
    next(error);
  }
}

// DELETE product
async function deleteById(req, res, next) {
  try {
    const { id } = req.params;
    await db.Product.findByIdAndDelete(id);
    res.status(200).send({ message: "Successfully deleted", id: id });
  } catch (error) {
    res.status(500).send({ error: error.message });
    next(error);
  }
}

// GET all
async function getAll(req, res, next) {
  try {
    const foundProducts = await db.Product.find({}).lean();
    res.status(200).send({ foundProducts: foundProducts });
  } catch (error) {
    res.status(500).send({ error: error.message });
    next(error);
  }
}

// POST product
async function add(req, res, next) {
  try {
    const { title, images, description, price, unitsInStock, lens } = req.body;
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
    next(error);
  }
}

// Sync product quantity
async function syncUnitsInStock(item) {
  try {
    const foundProduct = await db.Product.findById(item._id).lean();

    if (foundProduct.unitsInStock > item.quantity) {
      const newUnitsInStock = foundProduct.unitsInStock - item.quantity;

      const updatedItem = await db.Product.findByIdAndUpdate(
        foundProduct._id,
        { unitsInStock: newUnitsInStock },
        {
          new: true,
        },
      );
      return updatedItem;
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
  getAll: getAll,
  add: add,
  syncUnitsInStock: syncUnitsInStock,
};
