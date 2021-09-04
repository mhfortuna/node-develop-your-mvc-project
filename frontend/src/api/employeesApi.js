import { API } from "../constants/routes";

const axios = require("axios").default;

export function makeEmployeesApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.EMPLOYEES}`,
  });
}

export function postEmployee(data, api = makeEmployeesApi()) {
  return api.post(``, data);
}

export function getAllEmployees(api = makeEmployeesApi()) {
  return api.get(``);
}

export function removeEmployeeById(employeeId, api = makeEmployeesApi()) {
  return api.delete(`/${employeeId}`);
}

export function editEmployeeById(employeeId, api = makeEmployeesApi()) {
  return api.post(`/${employeeId}`);
}
