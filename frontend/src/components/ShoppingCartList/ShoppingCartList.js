import React from "react";
import ShoppingCartItem from "../ShoppingCartItem";

export default function ShoppingCartList({ cartItems }) {
  return (
    <div className="p-2 pt-0">
      {cartItems.map((product) => (
        <ShoppingCartItem key={product._id} product={product} />
      ))}
    </div>
  );
}
