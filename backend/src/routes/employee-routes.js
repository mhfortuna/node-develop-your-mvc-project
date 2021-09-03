const { employeeController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const employeeRouter = Router();

// Sign in
employeeRouter.post("/signin/", employeeController.signIn);
// public

// GET employee
employeeRouter.get("/:id", employeeController.getById);
// JWT

// PATCH employee
employeeRouter.patch("/:id", employeeController.updateById);
// JWT

// DELETE employee
employeeRouter.delete("/:id", employeeController.deleteById);
// JWT

// GET all
employeeRouter.get("/", employeeController.getAll);
// JWT

// POST employee
employeeRouter.post("/", employeeController.add);
// JWT

module.exports = {
  employeeRouter: employeeRouter,
};
