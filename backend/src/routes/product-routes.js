const { productController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const productRouter = Router();

// GET product
productRouter.get("/:id", productController.getById);
// PATCH product
productRouter.post("/:id", productController.updateById);
// DELETE product
productRouter.delete("/:id", productController.deleteById);

// GET all
productRouter.get("/", productController.getAll);
// POST product
productRouter.post("/", productController.add);

module.exports = {
  productRouter: productRouter,
};
