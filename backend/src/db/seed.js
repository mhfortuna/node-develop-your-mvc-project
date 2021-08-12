const db = require("../models");

const { getSeedProducts } = require("./data-products");
const { getSeedEmployees } = require("./data-employee");

async function seedProducts() {
  const results = getSeedProducts();

  await db.Product.deleteMany({});
  await db.Product.create([...results]);
}

async function seedEmployees() {
  const results = getSeedEmployees();

  await db.Employee.deleteMany({});
  await db.Employee.create([...results]);
}

module.exports = { seedProducts, seedEmployees };
