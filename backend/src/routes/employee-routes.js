const { employeeController, jwtController } = require("../controllers");
const {
  checkJwtToken,
  isAdmin,
} = require("../middlewares/auth-jwt-middleware");

const Router = require("express").Router;

// Declaring router
const employeeRouter = Router();

// Sign in
employeeRouter.post("/signin/", jwtController.signIn);
// public

// GET employee
employeeRouter.get("/:id", checkJwtToken, isAdmin, employeeController.getById);

// PATCH employee
employeeRouter.post(
  "/:id",
  checkJwtToken,
  isAdmin,
  employeeController.updateById,
);
// JWT

// DELETE employee
employeeRouter.delete(
  "/:id",
  checkJwtToken,
  isAdmin,
  employeeController.deleteById,
);
// JWT

// GET all
employeeRouter.get("/", checkJwtToken, isAdmin, employeeController.getAll);
// JWT

// POST employee
employeeRouter.post("/", checkJwtToken, isAdmin, employeeController.add);
// JWT

module.exports = {
  employeeRouter: employeeRouter,
};
