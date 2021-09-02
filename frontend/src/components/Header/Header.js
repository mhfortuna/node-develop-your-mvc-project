import React from "react";
import Button from "../Button/Button";
import CartIcon from "../SVGIcons/CartIcon";

import "./Header.scss";

export default function Header({ pageTitle, isLogged, cartItems }) {
  return (
    <header className="row m-0">
      <div className="col col-8 title p-0 mb-4 font-bold">{pageTitle}</div>
      {isLogged ? (
        <div className="col col-4 d-flex p-0 user-wrapper justify-content-end align-items-start">
          <div className="user-name font-bold medium-text">Username</div>
          {cartItems ? (
            <div className="ms-3">
              <Button transparent>
                <CartIcon />
              </Button>
            </div>
          ) : (
            <div className="ms-3">
              <Button transparent disabled>
                <CartIcon />
              </Button>
            </div>
          )}

          <div className="ms-3 btn btn-outline-dark medium-text">Log out</div>
        </div>
      ) : (
        <div className="col col-4 d-flex p-0 user-wrapper justify-content-end align-items-start">
          <div className="ms-3 btn btn-outline-dark medium-text">Log in</div>
        </div>
      )}
    </header>
  );
}
