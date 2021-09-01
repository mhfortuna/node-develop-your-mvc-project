import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeProductsApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.PRODUCTS}`,
  });
}

export function getAllProducts(api = makeProductsApi()) {
  return api.get(``);
}
