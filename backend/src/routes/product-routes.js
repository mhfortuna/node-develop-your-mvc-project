const { productController } = require("../controllers");
const { checkJwtToken } = require("../middlewares/auth-jwt-middleware");

const Router = require("express").Router;

// Declaring router
const productRouter = Router();

// GET product
productRouter.get("/:id", productController.getById);
// public

// PATCH product
productRouter.post("/:id", checkJwtToken, productController.updateById);

// DELETE product
productRouter.delete("/:id", checkJwtToken, productController.deleteById);
// JWT

// GET all
productRouter.get("/", productController.getAll);
// public

// POST product
productRouter.post("/", checkJwtToken, productController.add);
// JWT

module.exports = {
  productRouter: productRouter,
};
