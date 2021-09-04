import { API } from "../constants/routes";
import { getCurrentUserToken } from "../services/auth";

const axios = require("axios").default;

export function makeClientsApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.CLIENTS}`,
  });
}

// export function getAllProducts(api = makeClientsApi()) {
//   return api.get(``);
// }

export async function getClient(clientId, api = makeClientsApi()) {
  const token = await getCurrentUserToken();
  return api.get(`/${clientId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// export function removeProductById(productId, api = makeClientsApi()) {
//   return api.delete(`/${productId}`);
// }
