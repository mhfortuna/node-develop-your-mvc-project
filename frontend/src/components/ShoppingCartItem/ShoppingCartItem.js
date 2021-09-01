import React from "react";
import MinusCircleIcon from "../SVGIcons/MinusCircleIcon";
import AddIcon from "../SVGIcons/AddIcon";

export default function ShoppingCartItem({ product }) {
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
        <p className=" d-flex align-items-center">
          <MinusCircleIcon size={16} />
          <span className="mx-2 fs-5">{product.quantity}</span>
          <AddIcon size={16} />
        </p>
        <p className="fs-5 font-bold mb-0">Total</p>
        <p className="fs-5">${product.quantity * product.price}</p>
      </div>
    </div>
  );
}