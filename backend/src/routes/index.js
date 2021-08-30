const { clientRouter } = require("./client-routes");
const { employeeRouter } = require("./employee-routes");
const { productRouter } = require("./product-routes");

module.exports = {
  clientRouter: clientRouter,
  employeeRouter: employeeRouter,
  productRouter: productRouter,
};
