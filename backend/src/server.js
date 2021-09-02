const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const {
  clientRouter,
  employeeRouter,
  productRouter,
  orderRouter,
} = require("./routes");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use("/clients", clientRouter);
app.use("/employees", employeeRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

module.exports = app;
