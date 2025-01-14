//! PUBLIC PAGES

export const PUBLIC = {
  HOME: "/",
  PRODUCT: "/product",
  SHOPPING_CART: "/shopping-cart",
  SHIPPING: "/checkout/shipping",
  PAYMENT: "/checkout/payment",
  SUMMARY: "/checkout/summary",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  SIGNOUT: "/signout",
  USER_INFO: "/user",
  USER_EDIT: "/user/edit",
};

//! PRIVATE PAGES

export const PRIVATE = {
  ADMIN_SIGNIN: "/admin",
  DASHBOARD_USERS: "/admin/dashboard/employees",
  NEW_EMPLOYEE: "/admin/dashboard/employees/new",
  EDIT_EMPLOYEE: "/admin/dashboard/employees/edit",
  NEW_PRODUCT: "/admin/dashboard/products/new",
  EDIT_PRODUCT: "/admin/dashboard/products/edit",
  DASHBOARD_PRODUCTS: "/admin/dashboard/products",
};

// API

export const API = {
  MAIN: "http://localhost:4000",
  PRODUCTS: "/products",
  EMPLOYEES: "/employees",
  EMPLOYEES_SIGN_IN: "/employees/signin",
  CLIENTS: "/clients",
  CLIENTS_SIGN_IN: "/clients/signin",
  CLIENTS_SIGN_UP: "/clients/signup",
  ORDERS: "/orders",
};
