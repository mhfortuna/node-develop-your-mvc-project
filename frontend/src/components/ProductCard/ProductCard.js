import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="col">
      <div className="card h-100 border-0">
        <img
          className="card-img-top p-4 border"
          src={product.images.main}
          alt={`${product.title}`}
        />
        <div className="card-body">
          <h5 className="text-center fw-bold">{product.title}</h5>
          <div className="row">
            <div className="col-6">
              {product.unitsInStock > 0 && <p className="fw-bold">In stock</p>}
            </div>
            <div className="col-6">
              <p className="fw-bold fs-5 text-end">$ {product.price}</p>
            </div>
          </div>
          <p className="fs-6">
            Available lenses:{" "}
            {product.lens.map((item, index) =>
              index + 1 === product.lens.length ? `${item}mm ` : `${item}mm, `,
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
