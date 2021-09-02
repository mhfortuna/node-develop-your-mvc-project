import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { PUBLIC } from "../../../constants/routes";

import ShoppingCartList from "../../../components/ShoppingCartList/ShoppingCartList";
import CheckoutProductsList from "../../../components/CheckoutProductsList";
import Button from "../../../components/Button";

import CartContext from "../../../context/cart-context";

import withLayout from "../../../hoc/withLayout";

function ShoppingCart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="row page-div">
      <div className="col col-8 page-left">
        <ShoppingCartList cartItems={cartItems} />
      </div>
      <div className="col-4">
        <CheckoutProductsList />
        <div className="col-12 mt-4 text-end">
          <Link to={PUBLIC.SHIPPING}>
            <Button black>Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withLayout(ShoppingCart);
