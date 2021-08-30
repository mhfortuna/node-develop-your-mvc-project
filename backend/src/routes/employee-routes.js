const { employeeController } = require("../controllers");
const Router = require("express").Router;

// Declaring router
const employeeRouter = Router();

// GET employee
employeeRouter.get("/:id", employeeController.getById);
// PATCH employee
employeeRouter.patch("/:id", employeeController.updateById);
// DELETE employee
employeeRouter.delete("/:id", employeeController.deleteById);

// GET all
employeeRouter.get("/", employeeController.getAll);
// POST employee
employeeRouter.post("/", employeeController.add);

module.exports = {
  employeeRouter: employeeRouter,
};
