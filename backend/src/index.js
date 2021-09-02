const app = require("./server");
const { config } = require("./config/config");
const connect = require("./db/connect");
// const { /* seedProducts, */ seedEmployees } = require("./db/seed");

connect()
  .then(async () => {
    // await seedProducts();
    // await seedEmployees();

    app.listen(config.app.port, () => {
      console.log(`Server running at port ${config.app.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
