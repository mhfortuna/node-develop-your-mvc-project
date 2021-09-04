const { orderController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const orderRouter = Router();

// POST product
orderRouter.post("/", orderController.add);
// firebase

module.exports = {
  orderRouter,
};
