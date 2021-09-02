import React, { useContext, useState, useEffect } from "react";
import QuantityWrapper from "../QuantityWrapper";

import CartContext from "../../context/cart-context";

export default function ShoppingCartItem({ product }) {
  const { updateQuantityContext } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {}, [quantity]);

  const handleMinusQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
      const updatedProduct = { ...product, quantity };
      updateQuantityContext(updatedProduct);
    }
  };

  const handleAddQuantity = () => {
    if (quantity !== product.unitsInStock) {
      setQuantity(quantity + 1);
      const updatedProduct = { ...product, quantity };
      updateQuantityContext(updatedProduct);
    }
  };

  return (
    <div className="row mb-3 p-2">
      <div className="col-3 d-flex align-items-center justify-content-center">
        <img
          src={product.images.main}
          alt={product.title}
          className="img-fluid p-2"
        />
      </div>
      <div className="col">
        <p className="font-bold text-uppercase fs-2 mb-1">{product.title}</p>
        <p className="intermediate-text font-bold mb-0 fs-5">Quantity</p>
        <QuantityWrapper
          quantity={quantity}
          handleMinusQuantity={handleMinusQuantity}
          handleAddQuantity={handleAddQuantity}
        />
        <p className="fs-5 font-bold mb-0">Total</p>
        <p className="fs-5">${product.quantity * product.price}</p>
      </div>
    </div>
  );
}
