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

  return (
    <div className="row">
      {checkoutProducts.map((checkoutProduct) => (
        <CheckoutProduct
          checkoutProduct={checkoutProduct}
          key={checkoutProduct._id.$oid}
        />
      ))}
    </div>
  );
}
