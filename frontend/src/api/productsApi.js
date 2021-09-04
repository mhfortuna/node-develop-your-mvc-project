import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeProductsApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.PRODUCTS}`,
  });
}

export function postProduct(data, api = makeProductsApi()) {
  return api.post(``, data);
}

export function getAllProducts(api = makeProductsApi()) {
  return api.get(``);
}

export function getProduct(productId, api = makeProductsApi()) {
  return api.get(`/${productId}`);
}

export function removeProductById(productId, api = makeProductsApi()) {
  return api.delete(`/${productId}`);
}
