import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PUBLIC, PRIVATE } from "./constants/routes";
import { CheckoutContextProvider } from "./context/checkout-context";

import UserDashboard from "./pages/Private/UserDashboard/UserDashboard";
import Home from "./pages/Public/Home";
import SignIn from "./pages/Public/SignIn";
import UserInfo from "./pages/Public/UserInfo";
import SignInDashboard from "./pages/Private/SignIn";
import SignUp from "./pages/Public/SignUp";

import "./sass/main.scss";

function App() {
  return (
    <CheckoutContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path={PRIVATE.DASHBOARD_PRODUCTS} />
          <Route path={PRIVATE.DASHBOARD_USERS}>
            <UserDashboard />
          </Route>
          <Route path={PUBLIC.SUMMARY} />
          <Route path={PUBLIC.PAYMENT} />
          <Route path={PUBLIC.SHIPPING} />
          <Route path={PUBLIC.SUMMARY} />
          <Route path={PUBLIC.USER_INFO}>
            <UserInfo />
          </Route>
          <Route path={PUBLIC.SIGNIN}>
            <SignIn />
          </Route>
          <Route path={PUBLIC.SIGNUP}>
            <SignUp />
          </Route>
          <Route path={PUBLIC.PRODUCT} />
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
