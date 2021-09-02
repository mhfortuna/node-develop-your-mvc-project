import React, { useContext } from "react";

import CheckoutProduct from "../CheckoutProduct";

import CartContext from "../../context/cart-context";

export default function CheckoutProductsList() {
  const { cartItems } = useContext(CartContext);

  let totalPrice = 0;

  return (
    <div className=" backgroundCheckout p-5">
      <div className="row border-bottom border-dark mb-4">
        <h5 className="font-bold medium-big-text text-truncate">
          Order information
        </h5>
      </div>
      <div className="row border-bottom border-dark">
        {cartItems.map((checkoutProduct) => (
          <CheckoutProduct
            checkoutProduct={checkoutProduct}
            key={checkoutProduct._id}
          />
        ))}
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-between">
          <h5 className="font-bold medium-big-text text-truncate">Total</h5>
          {cartItems.forEach((checkoutProduct) => {
            totalPrice += checkoutProduct.price * checkoutProduct.quantity;
            return totalPrice;
          })}
          <p className="medium-big-text">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
