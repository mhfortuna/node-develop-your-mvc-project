import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PUBLIC, PRIVATE } from "./constants/routes";
import { CheckoutContextProvider } from "./context/checkout-context";

import EmployeeDashboard from "./pages/Private/EmployeeDashboard/EmployeeDashboard";
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

function App() {
  return (
    <CheckoutContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path={PRIVATE.DASHBOARD_PRODUCTS} />
          <Route path={PRIVATE.DASHBOARD_USERS}>
            <EmployeeDashboard />
          </Route>
          <Route path={PUBLIC.SUMMARY} />
          <Route path={PUBLIC.PAYMENT}>
            <Payment />
          </Route>
          <Route path={PUBLIC.SHIPPING}>
            <Shipping />
          </Route>
          <Route path={PUBLIC.SUMMARY} />
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
    </CheckoutContextProvider>
  );
}

export default App;
