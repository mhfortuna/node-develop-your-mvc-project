import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeOrdersApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.ORDERS}`,
  });
}

export function postOrder(order, api = makeOrdersApi()) {
  return api.post(``, order);
}
