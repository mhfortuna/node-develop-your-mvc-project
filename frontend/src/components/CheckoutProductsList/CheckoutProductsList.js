import React from "react";

import CheckoutProduct from "../CheckoutProduct";

export default function CheckoutProductsList() {
  //! mocked data
  const checkoutProducts = [
    {
      _id: { $oid: "612cabd64ad7283d5ce6cd30" },
      images: {
        main: "https://m.media-amazon.com/images/I/510BMH39rFS._AC_SL1000_.jpg",
      },
      lens: ["80", "120", "300"],
      price: 451.49,
      title: "Canon EOS 4000D",
      unitsInStock: 45,
      quantity: 1,
    },
    {
      _id: { $oid: "612cabd64ad7283d5ce6cd32" },
      images: {
        main: "https://m.media-amazon.com/images/I/81kWz3CnOJS._AC_SL1500_.jpg",
      },
      lens: ["80", "120", "300"],
      price: 451.49,
      title: "Kodak Astro Zoom AZ422",
      unitsInStock: 25,
      quantity: 3,
    },
  ];

  let totalPrice = 0;

  return (
    <div className=" backgroundLight p-5">
      <div className="row border-bottom border-dark mb-4">
        <h5 className="font-bold medium-big-text text-truncate">
          Order information
        </h5>
      </div>
      <div className="row border-bottom border-dark">
        {checkoutProducts.map((checkoutProduct) => (
          <CheckoutProduct
            checkoutProduct={checkoutProduct}
            key={checkoutProduct._id.$oid}
          />
        ))}
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-between">
          <h5 className="font-bold medium-big-text text-truncate">Checkout</h5>
          {checkoutProducts.forEach((checkoutProduct) => {
            totalPrice += checkoutProduct.price * checkoutProduct.quantity;
            return totalPrice;
          })}
          <p className="medium-big-text">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
