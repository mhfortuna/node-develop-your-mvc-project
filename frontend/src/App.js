import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PUBLIC, PRIVATE } from "./constants/routes";
import { CheckoutContextProvider } from "./context/checkout-context";
import Home from "./pages/Public/Home";
import "./sass/main.scss";

function App() {
  return (
    <CheckoutContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path={PRIVATE.DASHBOARD_PRODUCTS} />
          <Route path={PRIVATE.DASHBOARD_USERS} />
          <Route path={PUBLIC.SUMMARY} />
          <Route path={PUBLIC.PAYMENT} />
          <Route path={PUBLIC.SHIPPING} />
          <Route path={PUBLIC.SUMMARY} />
          <Route path={PUBLIC.USER_EDIT} />
          <Route path={PUBLIC.USER_INFO} />
          <Route path={PUBLIC.SIGNIN} />
          <Route path={PUBLIC.SIGNUP} />
          <Route path={PUBLIC.PRODUCT} />
          <Route path={PRIVATE.ADMIN_SIGNIN} />
          <Route path={PUBLIC.HOME}>
            <Home fullWith />
          </Route>
        </Switch>
      </BrowserRouter>
    </CheckoutContextProvider>
  );
}

export default App;
