const clientModel = require("./client-model");
const productModel = require("./product-model");
const employeeModel = require("./employee-model");
const orderModel = require("./order-model");

module.exports = {
  Client: clientModel,
  Product: productModel,
  Employee: employeeModel,
  Order: orderModel,
};
