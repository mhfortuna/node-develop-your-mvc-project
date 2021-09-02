import React, { useContext, useState, useEffect } from "react";
import CrossIcon from "../SVGIcons/CrossIcon";
import QuantityWrapper from "../QuantityWrapper";

import CartContext from "../../context/cart-context";
import "./ShoppingCartItem.scss";

export default function ShoppingCartItem({ product }) {
  const { updateQuantityContext, removeItemContext } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {}, [quantity]);

  const handleMinusQuantity = () => {
    if (quantity !== 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      const updatedProduct = { ...product, quantity: newQuantity };
      updateQuantityContext(updatedProduct);
    }
  };

  const handleAddQuantity = () => {
    if (quantity !== product.unitsInStock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      const updatedProduct = { ...product, quantity: newQuantity };
      updateQuantityContext(updatedProduct);
    }
  };

  const handleRemoveItem = () => {
    removeItemContext(product._id);
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
        <p className="fs-5 font-bold mb-0">Price</p>
        <p className="fs-5">${product.price}</p>
      </div>

      <div className="col">
        <button
          type="button"
          className="transparent-button mt-2"
          onClick={handleRemoveItem}
        >
          <CrossIcon size={24} />
        </button>
      </div>
    </div>
  );
}
