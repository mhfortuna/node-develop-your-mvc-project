const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");

const { clientRouter, employeeRouter, productRouter } = require("./routes");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());

// Main endpoints
// app.get("/", (req, res) => {
//   res.status(200).send({
//     data: "hello-mundo",
//   });
// });

app.use("/clients", clientRouter);
app.use("/employees", employeeRouter);
app.use("/products", productRouter);

module.exports = app;
