import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import CartIcon from "../SVGIcons/CartIcon";

import CartContext from "../../context/cart-context";

import { PUBLIC } from "../../constants/routes";

import "./Header.scss";

export default function Header({ pageTitle, isLogged, IsCartItems }) {
  const { cartItems } = useContext(CartContext);

  let totalCartItems = 0;

  return (
    <header className="row m-0">
      <Link className="col col-8 p-0" to={PUBLIC.HOME}>
        <div className="title font-bold">{pageTitle}</div>
      </Link>

      {isLogged ? (
        <div className="col col-4 d-flex p-0 user-wrapper justify-content-end align-items-start">
          <div className="user-name font-bold medium-text">Username</div>
          {IsCartItems ? (
            <Link to={PUBLIC.SHOPPING_CART}>
              <div className="ms-3">
                <Button transparent>
                  <CartIcon />
                </Button>
                {cartItems.forEach((checkoutProduct) => {
                  totalCartItems += checkoutProduct.quantity;
                  return totalCartItems;
                })}
                {IsCartItems && (
                  <div className="total-cart-items text-center align-items-center">
                    {totalCartItems}
                  </div>
                )}
              </div>
            </Link>
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
