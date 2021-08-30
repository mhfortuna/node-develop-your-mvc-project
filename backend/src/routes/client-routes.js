const { clientController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const clientRouter = Router();

// GET client
clientRouter.get("/:id", clientController.getById);
// PATCH client
clientRouter.patch("/:id", clientController.updateById);

// POST client
clientRouter.post("/", clientController.add);

module.exports = {
  clientRouter: clientRouter,
};
