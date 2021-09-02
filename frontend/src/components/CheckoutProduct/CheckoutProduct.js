import React from "react";

export default function CheckoutProduct({ checkoutProduct }) {
  return (
    <>
      <div className="col-6 mb-4">
        <img
          className="h-100 product-card-img img-fluid multiply-blend-mode"
          src={checkoutProduct.images.main}
          alt={checkoutProduct.title}
        />
      </div>
      <div className="col-6 mb-4">
        <div className="row">
          <h5 className="font-bold medium-big-text text-truncate">
            {checkoutProduct.title}
          </h5>
        </div>
        <div className="row d-flex flex-column justify-content-between">
          <div className="row">
            <div className="col-12 d-flex">
              <p className="font-bold m-0">Quantity</p>
              <p className="mx-1 mb-0">{checkoutProduct.quantity}</p>
            </div>
            <div className="col-12 d-flex pt-n5">
              <p className="font-bold m-0">Lens</p>
              <p className="mx-1 mb-0">{checkoutProduct.lens[0]}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex">
              <p className="font-bold">Subtotal</p>
              <p className="mx-2">
                ${checkoutProduct.quantity * checkoutProduct.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
