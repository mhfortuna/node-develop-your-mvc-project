import React from "react";

import "./QuantityIcon.scss";

export default function QuantityIcon({ children, handleClick = () => {} }) {
  return (
    <button
      className="quantity-icon p-0 m-0"
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
