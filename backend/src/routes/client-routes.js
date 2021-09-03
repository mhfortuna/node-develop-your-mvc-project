const { clientController } = require("../controllers");
const Router = require("express").Router;

const {
  authFirebaseMiddleware,
} = require("../middlewares/auth-firebase-middleware");

// Declaring router
const clientRouter = Router();

// Sign in
clientRouter.post("/signin/", authFirebaseMiddleware, clientController.signIn);
// public

// Sign in
clientRouter.post("/signup/", authFirebaseMiddleware, clientController.signUp);
// public

// GET client
clientRouter.get("/:id", authFirebaseMiddleware, clientController.getById);
// firebase

// PATCH client
clientRouter.patch("/:id", authFirebaseMiddleware, clientController.updateById);
// firebase

// POST client
clientRouter.post("/", clientController.add);
// public

module.exports = {
  clientRouter: clientRouter,
};
