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

export function getEmployeeById(employeeId, api = makeEmployeesApi()) {
  return api.get(`/${employeeId}`);
}

export function removeEmployeeById(employeeId, api = makeEmployeesApi()) {
  return api.delete(`/${employeeId}`);
}

export function editEmployee(employee, api = makeEmployeesApi()) {
  return api.post(`/${employee.id}`, { employee: employee });
}
