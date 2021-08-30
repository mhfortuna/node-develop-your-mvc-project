import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PUBLIC, PRIVATE } from "./constants/routes";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-headser">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
        <Route path={PUBLIC.HOME} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
