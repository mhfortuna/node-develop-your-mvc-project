const { clientRouter } = require("./client-routes");
const { employeeRouter } = require("./employee-routes");
const { productRouter } = require("./product-routes");
const { orderRouter } = require("./order-routes");

module.exports = {
  clientRouter: clientRouter,
  employeeRouter: employeeRouter,
  productRouter: productRouter,
  orderRouter: orderRouter,
};
