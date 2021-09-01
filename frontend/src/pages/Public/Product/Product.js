import React from "react";
import SidebarProduct from "../../../components/SidebarProduct";

import withLayout from "../../../hoc/withLayout";

import "./Product.scss";

function Product() {
  //! mocked data

  const mockedProduct = {
    _id: "612cbfa81ea73e22970e3794",
    images: {
      others: [
        "https://m.media-amazon.com/images/I/81X7kvLtaRL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/41Lc7PPlw0L._AC_.jpg",
        "https://m.media-amazon.com/images/I/81Sh9g7QSPL._AC_SL1500_.jpg",
      ],
      main: "https://m.media-amazon.com/images/I/61ebZJOb0rL._AC_SX679_.jpg",
    },
    price: 1000,
    unitsInStock: 22,
    lens: ["80", "120", "300"],
    title: "Sony Alpha 6400",
    description:
      "The next generation mirrorless camera with the world’s fastest Auto Focus\n          The ILCE-6400 combines the compact size and light weight of a mirrorless camera with the fast performance and some advanced features of a pro-level model. Stills or movies, creative compositions or everyday selfies – whatever your style, you can now capture beautiful images on the go.\n          Packaged with the 16-50mm Power Zoom Lens, the ILCE-6400 gives you the compact versatility to shoot your world your way – from candid street shots to close-up portraiture. Combined with the 180-degree flip screen on of the body, it’s also great for Vlogging & Selfies.",
    createdAt: "2021-08-30T11:23:20.148Z",
    updatedAt: "2021-08-30T11:38:22.019Z",
    __v: 0,
  };

  return (
    <div className="row page-div">
      <div className="col col-8 page-left">Product images</div>
      <SidebarProduct product={mockedProduct} />
    </div>
  );
}

export default withLayout(Product);
