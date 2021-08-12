const userModel = require("./user-model");
const productModel = require("./product-model");
const employeeModel = require("./employee-model");
const orderModel = require("./order-model");

module.exports = {
  User: userModel,
  Product: productModel,
  Employee: employeeModel,
  Order: orderModel,
};
