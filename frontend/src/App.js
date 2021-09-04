import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PUBLIC, PRIVATE } from "./constants/routes";
import { CheckoutContextProvider } from "./context/checkout-context";
import { CartContextProvider } from "./context/cart-context";

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
import AddProduct from "./pages/Private/AddProduct/AddProduct";
import EditEmployee from "./pages/Private/EditEmployee/EditEmployee";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path={PRIVATE.EDIT_EMPLOYEE}>
            <EditEmployee />
          </Route>
          <Route path={PRIVATE.NEW_EMPLOYEE}>
            <AddEmployee />
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
          <Route path={PUBLIC.PAYMENT}>
            <CheckoutContextProvider>
              <Payment />
            </CheckoutContextProvider>
          </Route>
          <Route path={PUBLIC.SHIPPING}>
            <CheckoutContextProvider>
              <Shipping />
            </CheckoutContextProvider>
          </Route>
          <Route path={PUBLIC.SHOPPING_CART}>
            <ShoppingCart />
          </Route>
          <Route path={PUBLIC.USER_INFO}>
            <UserInfo />
          </Route>
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
  );
}

export default App;
