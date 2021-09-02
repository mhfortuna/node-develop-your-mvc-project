import React, { useContext } from "react";

import ShoppingCartList from "../../../components/ShoppingCartList/ShoppingCartList";
import CheckoutProductsList from "../../../components/CheckoutProductsList";

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
      </div>
    </div>
  );
}

export default withLayout(ShoppingCart);
