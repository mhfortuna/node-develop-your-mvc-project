const db = require("../models");

const { getSeedProducts } = require("./data-products");

async function seedProducts() {
  //TODO:

  await db.Product.deleteMany({});
  await db.Product.create([...results]);
}

async function seedEmployees() {
  //TODO:

  await db.Employee.deleteMany({});
  await db.Employee.create([...results]);
}
