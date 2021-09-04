const { productController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const productRouter = Router();

// GET product
productRouter.get("/:id", productController.getById);
// public

// PATCH product
productRouter.patch("/:id", productController.updateById);
// JWT

// DELETE product
productRouter.delete("/:id", productController.deleteById);
// JWT

// GET all
productRouter.get("/", productController.getAll);
// public

// POST product
productRouter.post("/", productController.add);
// JWT

module.exports = {
  productRouter: productRouter,
};
