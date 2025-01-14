import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PUBLIC, PRIVATE } from "./constants/routes";
import { CheckoutContextProvider } from "./context/checkout-context";
import { CartContextProvider } from "./context/cart-context";
import { AuthContextProvider } from "./context/auth-context";

import EmployeeDashboard from "./pages/Private/EmployeeDashboard";
import ProductsDashboard from "./pages/Private/ProductsDashboard";
import Home from "./pages/Public/Home";
import Product from "./pages/Public/Product";
import SignIn from "./pages/Public/SignIn";
import UserInfo from "./pages/Public/UserInfo";
import SignInDashboard from "./pages/Private/SignIn";
import SignUp from "./pages/Public/SignUp";
import ShoppingCart from "./pages/Public/ShoppingCart";
import Shipping from "./pages/Public/Shipping";
import Payment from "./pages/Public/Payment/Payment";

import "./sass/main.scss";
import Summary from "./pages/Public/Summary/Summary";
import AddEmployee from "./pages/Private/AddEmployee";
import AddProduct from "./pages/Private/AddProduct";
import EditEmployee from "./pages/Private/EditEmployee/EditEmployee";
import EditProduct from "./pages/Private/EditProduct";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path={PRIVATE.EDIT_EMPLOYEE}>
              <EditEmployee />
            </Route>
            <Route path={PRIVATE.NEW_EMPLOYEE}>
              <AddEmployee />
            </Route>
            <Route path={PRIVATE.EDIT_PRODUCT}>
              <EditProduct />
            </Route>
            <Route path={PRIVATE.NEW_PRODUCT}>
              <AddProduct />
            </Route>
            <Route path={PRIVATE.DASHBOARD_PRODUCTS}>
              <ProductsDashboard />
            </Route>
            <Route path={PRIVATE.DASHBOARD_USERS}>
              <EmployeeDashboard />
            </Route>
            <Route path={PUBLIC.SUMMARY}>
              <CheckoutContextProvider>
                <Summary />
              </CheckoutContextProvider>
            </Route>
            <PrivateRoute path={PUBLIC.PAYMENT}>
              <CheckoutContextProvider>
                <Payment />
              </CheckoutContextProvider>
            </PrivateRoute>
            <PrivateRoute path={PUBLIC.SHIPPING}>
              <CheckoutContextProvider>
                <Shipping />
              </CheckoutContextProvider>
            </PrivateRoute>
            <Route path={PUBLIC.SHOPPING_CART}>
              <ShoppingCart />
            </Route>
            <PrivateRoute path={PUBLIC.USER_INFO}>
              <UserInfo />
            </PrivateRoute>
            <Route path={PUBLIC.SIGNIN}>
              <SignIn />
            </Route>
            <Route path={PUBLIC.SIGNUP}>
              <SignUp />
            </Route>
            <Route path={PUBLIC.PRODUCT}>
              <Product />
            </Route>
            <Route path={PRIVATE.ADMIN_SIGNIN}>
              <SignInDashboard />
            </Route>
            <Route path={PUBLIC.HOME}>
              <Home fullWith />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
