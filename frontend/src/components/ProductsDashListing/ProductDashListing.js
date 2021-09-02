import React from "react";
import ProductsDashRow from "../ProductsDashRow/ProductsDashRow";

function ProductDashListing({ products, handleRemoved }) {
  return (
    <>
      {products.map((product) => (
        <ProductsDashRow
          key={product.title}
          product={product}
          handleRemoved={handleRemoved}
        />
      ))}
    </>
  );
}

export default ProductDashListing;
