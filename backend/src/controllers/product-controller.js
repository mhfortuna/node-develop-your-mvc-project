const db = require("../models");

// GET product
async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const foundProduct = await db.Product.findById(id).lean();
    res.status(200).send({ foundProduct: foundProduct });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// PATCH product
async function updateById(req, res, next) {
  try {
    const { id } = req.params;
    const editedProduct = req.body.product;
    console.log("Received edited product --> ", editedProduct);
    const updatedProduct = await db.Product.findByIdAndUpdate(
      id,
      {
        title: editedProduct.title,
        price: editedProduct.price,
        description: editedProduct.description,
        images: editedProduct.images,
        lens: editedProduct.lens,
        unitsInStock: editedProduct.unitsInStock,
      },
      {
        new: true,
      },
    );
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
  }
}

module.exports = {
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
  getAll: getAll,
  add: add,
};
