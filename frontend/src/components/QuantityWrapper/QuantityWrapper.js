import React from "react";
import QuantityIcon from "../QuantityIcon";
import AddIcon from "../SVGIcons/AddIcon";
import MinusCircleIcon from "../SVGIcons/MinusCircleIcon";

import "./QuantityWrapper.scss";

export default function QuantityWrapper({
  quantity,
  handleMinusQuantity = () => {},
  handleAddQuantity = () => {},
}) {
  return (
    <p className="quantity-buttons font-regular d-flex align-items-center">
      <QuantityIcon handleClick={handleMinusQuantity}>
        <MinusCircleIcon />
      </QuantityIcon>
      <span className="mx-2 text-center">{quantity}</span>
      <QuantityIcon handleClick={handleAddQuantity}>
        <AddIcon />
      </QuantityIcon>
    </p>
  );
}
