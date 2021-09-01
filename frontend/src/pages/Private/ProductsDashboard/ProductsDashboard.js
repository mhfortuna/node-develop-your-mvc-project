import React from "react";
import Button from "../../../components/Button/Button";
import ProductDashListing from "../../../components/ProductsDashListing/ProductDashListing";
// import EmployeeListing from "../../../components/EmployeeListing";

import withLayout from "../../../hoc/withLayout";

function ProductsDashboard() {
  const products = [
    {
      title: "Sony Alpha 6400",
      images: {
        main: "https://m.media-amazon.com/images/I/61ebZJOb0rL._AC_SX679_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/81X7kvLtaRL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/41Lc7PPlw0L._AC_.jpg",
          "https://m.media-amazon.com/images/I/81Sh9g7QSPL._AC_SL1500_.jpg",
        ],
      },
      description: `The next generation mirrorless camera with the world’s fastest Auto Focus
          The ILCE-6400 combines the compact size and light weight of a mirrorless camera with the fast performance and some advanced features of a pro-level model. Stills or movies, creative compositions or everyday selfies – whatever your style, you can now capture beautiful images on the go.
          Packaged with the 16-50mm Power Zoom Lens, the ILCE-6400 gives you the compact versatility to shoot your world your way – from candid street shots to close-up portraiture. Combined with the 180-degree flip screen on of the body, it’s also great for Vlogging & Selfies.`,
      price: 899.0,
      unitsInStock: 22,
      lens: ["80", "120", "300"],
    },
    {
      title: "Canon EOS 2000D",
      images: {
        main: "https://m.media-amazon.com/images/I/613WC3OoLFL._AC_SX679_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/61hNRFfJCFL._AC_SL1000_.jpg",
          "https://m.media-amazon.com/images/I/61X5gA2n9lL._AC_SL1000_.jpg",
          "https://m.media-amazon.com/images/I/6160K6l+1TL._AC_SL1000_.jpg",
        ],
      },
      description: `Easily tell stories with detailed photos and cinematic Full HD movies full of colour, even in difficult light, using the 24.1 Megapixel EOS 2000D. Share instantly and shoot remotely with Wi-Fi and Canon Connect app.`,
      price: 398.0,
      unitsInStock: 15,
      lens: ["80", "120", "300"],
    },
    {
      title: "Canon EOS M50",
      images: {
        main: "https://m.media-amazon.com/images/I/810Odol4pkL._AC_SX679_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/71MMtE6yzGL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/81J2jhOyvrL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/81NoSHFW1YL._AC_SL1500_.jpg",
        ],
      },
      description: `Whatever content you create, the EOS M50 Mark II gives you more ways to work plus stunning image quality that will set you apart from the crowd. With support for YouTube live streaming, vertical movies and a microphone input, you can tell your story with passion, whether you’re shooting photos or movies or streaming.`,
      price: 627.0,
      unitsInStock: 35,
      lens: ["80", "120", "300"],
    },
    {
      title: "Nikon D3500",
      images: {
        main: "https://m.media-amazon.com/images/I/613qM524ciL._AC_SX679_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/71rBCPiCDiL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/61-0BYIfQ-L._AC_SL1082_.jpg",
          "https://m.media-amazon.com/images/I/81E6bLCTYyL._AC_SL1500_.jpg",
        ],
      },
      description: `Whatever content you create, the EOS M50 Mark II gives you more ways to work plus stunning image quality that will set you apart from the crowd. With support for YouTube live streaming, vertical movies and a microphone input, you can tell your story with passion, whether you’re shooting photos or movies or streaming.`,
      price: 479.0,
      unitsInStock: 19,
      lens: ["80", "120", "300"],
    },
    {
      images: {
        main: "https://m.media-amazon.com/images/I/510BMH39rFS._AC_SL1000_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/41eYZ96P8pL._AC_.jpg",
          "https://m.media-amazon.com/images/I/41niJbFf-VL._AC_.jpg",
          "https://m.media-amazon.com/images/I/41rqa-tZ00L._AC_.jpg",
        ],
      },
      title: "Canon EOS 4000D",
      description:
        "Easily capture stunning images with a natural background blur effect, even in poor lighting conditions, thanks to an 18 megapixel sensor with up to 19 times the surface area of most smartphones. Turn inspirational moments into creative Full HD videos or use the video snapshot feature to simply capture the highlights of the day. Transfer your photos and movies instantly to your smart device and easily share them on social networks or backup to the cloud with irista. You can also shoot remotely via WiFi and the Canon Camera Connect app. Just frame and shoot to get great results with Scene Intelligent Auto mode",
      price: 451.49,
      unitsInStock: 45,
      lens: ["80", "120", "300"],
    },
    {
      images: {
        main: "https://m.media-amazon.com/images/I/81qszNigceL._AC_SL1500_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/81AFDzajnfL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/817S2EoP6NL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/817fJTUplVL._AC_SL1500_.jpg",
        ],
      },
      title: "Panasonic Lumix DC-FZ82",
      description:
        "Compact camera photo and video in 4K. 20-1200mm lens, f2.8-5.9. 18.1 MP MOS sensor, 1,170,000-dot viewfinder and 1.04,000-dot LCD touch screen. Post focus, WiFi, 4K images and AF Light Speed with DFD technology, 4K video (3840 x 2160 30p / 25p maximum 15 minutes).",
      price: 297.99,
      unitsInStock: 65,
      lens: ["80", "120", "300"],
    },
    {
      images: {
        main: "https://m.media-amazon.com/images/I/81kWz3CnOJS._AC_SL1500_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/81iVhVZFTNL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/81cX9MIFZhL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/61fpAojq+YL._AC_SL1000_.jpg",
        ],
      },
      title: "Kodak Astro Zoom AZ422",
      description:
        "A 42x ultra long zoom lens with optical image stabilization delivers crisp, clear 20 megapixel close-ups, panorama or HD videos. Auto scene, object tracking, post-editing features and a host of powerful yet user-friendly settings make photography easy, fun and zero hassle. KODAK PIXPRO Digital Cameras.",
      price: 451.49,
      unitsInStock: 25,
      lens: ["80", "120", "300"],
    },
    {
      images: {
        main: "https://m.media-amazon.com/images/I/813nhrot8BL._AC_SL1500_.jpg",
        others: [
          "https://m.media-amazon.com/images/I/71QJHdNScKL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/81YGlVg77PL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71QJHdNScKL._AC_SL1500_.jpg",
        ],
      },
      title: "Nikon D750",
      description:
        "Unleash your creative vision with the D750 - a fast, versatile and agile camera. In a world where anything is possible, this 24.3 MP full-frame wonder gives you the freedom you want. Nothing can resist this camera, which is equipped with advanced imaging technology and optimized to be very compact. The FX-format sensor provides exceptional image quality with sharper results at high ISO sensitivities. Super-sensitive AF performance, a burst rate of up to 6.5 fps, and the option of 1080 / 60p Full HD movie recording combine with the tilting portrait display for total freedom of expression . Thanks to the built-in Wi-Fi connection, it's easy to share stunning photos in an instant",
      price: 865.0,
      unitsInStock: 95,
      lens: ["80", "120", "300"],
    },
  ];

  return (
    <>
      <div className="d-flex mb-5">
        <div className="mt-5 me-3">
          <Button transparent>Users</Button>
        </div>
        <div className="mt-5 me-3">
          <Button black>Products</Button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="customDark text-center font-semi-bold">
                Product ID
              </th>
              <th scope="col" className="customDark text-center font-semi-bold">
                Product Name
              </th>
              <th scope="col" className="customDark text-center font-semi-bold">
                Description
              </th>
              <th scope="col" className="customDark text-center font-semi-bold">
                Lens
              </th>
              <th scope="col" className="customDark text-center font-semi-bold">
                Image URL
              </th>
              <th scope="col" className="customDark text-center font-semi-bold">
                Price
              </th>
              <th scope="col" className="customDark text-center font-semi-bold">
                Stock
              </th>
              <th scope="col" className="customDark text-center font-semi-bold">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            <ProductDashListing products={products} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default withLayout(ProductsDashboard);
