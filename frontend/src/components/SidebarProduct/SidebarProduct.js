import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../Button";
import QuantityWrapper from "../QuantityWrapper";

import CartContext from "../../context/cart-context";

import { PUBLIC } from "../../constants/routes";

import "./SidebarProduct.scss";

export default function SidebarProduct({ product }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {}, [quantity]);

  const { addItemContext } = useContext(CartContext);

  const history = useHistory();

  const handleMinusQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddQuantity = () => {
    if (quantity !== product.unitsInStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addItemContext({ ...product, quantity });
    history.push(PUBLIC.SHOPPING_CART);
  };

  return (
    <div className="col col-4 sidebar pe-0 d-flex flex-column">
      <div className="font-bold big-text product-title">{product.title}</div>
      <div className="product-nums">
        <div className="product-quantity">
          <div className="product-subtitle font-bold">Quantity</div>
          <QuantityWrapper
            quantity={quantity}
            handleMinusQuantity={handleMinusQuantity}
            handleAddQuantity={handleAddQuantity}
          />
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
      <div className="col col-12 d-flex justify-content-between">
        <div className="col col-3 button-wrapper w-25">
          <Link to={PUBLIC.HOME}>
            <Button fullWidth black>
              Back
            </Button>
          </Link>
        </div>
        <div className="col col-3 button-wrapper w-25">
          <Button handleClick={handleAddToCart} black>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
