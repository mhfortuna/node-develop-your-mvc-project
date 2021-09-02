import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeEmployeesApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.EMPLOYEES}`,
  });
}

export function getAllEmployees(api = makeEmployeesApi()) {
  return api.get(``);
}

// export function getProduct(productId, api = makeProductsApi()) {
//   return api.get(`/${productId}`);
// }
