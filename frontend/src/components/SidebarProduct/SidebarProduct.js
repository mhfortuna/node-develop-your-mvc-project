import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import AddIcon from "../SVGIcons/AddIcon";
import MinusCircleIcon from "../SVGIcons/MinusCircleIcon";

import CartContext from "../../context/cart-context";

import { PUBLIC } from "../../constants/routes";

import "./SidebarProduct.scss";

export default function SidebarProduct({ product }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  });

  const { addItemContext } = useContext(CartContext);

  const history = useHistory();

  const handleClick = () => {
    addItemContext({ ...product, quantity });
    history.push(PUBLIC.SHOPPING_CART);
  };

  return (
    <div className="col col-4 sidebar pe-0 d-flex flex-column">
      <div className="font-bold big-text product-title">{product.title}</div>
      <div className="product-nums">
        <div className="product-quantity">
          <div className="product-subtitle font-bold">Quantity</div>
          <p className="product-number font-regular d-flex align-items-center">
            <MinusCircleIcon />
            <span className="mx-2">{quantity}</span>
            <AddIcon />
          </p>
        </div>
        <div className="product-price d-inline">
          <div className="product-subtitle font-bold">Price</div>
          <div className="product-number font-regular">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="product-description description-text">
        {product.description}
      </div>
      <div className="button-wrapper ms-auto w-25">
        <Button handleClick={handleClick} black>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
