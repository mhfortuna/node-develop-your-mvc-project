import React from "react";
import ProductsDashRow from "../ProductsDashRow/ProductsDashRow";

function ProductDashListing({ products }) {
  return (
    <>
      {products.map((product) => (
        <ProductsDashRow
          key={product.title}
          id="123456"
          productName={product.title}
          description={product.description}
          lens={product.lens}
          image={product.images.main}
          price={product.price}
          stock={product.unitsInStock}
        />
      ))}
    </>
  );
}

export default ProductDashListing;
