import React from "react";
import { removeProductById } from "../../api";
import DashButton from "../DashButton/DashButton";
import EditIcon from "../SVGIcons/EditIcon";
import RemoveIcon from "../SVGIcons/RemoveIcon";

function ProductsDashRow({ product, handleRemoved }) {
  const handleError = () => {};

  const removeProduct = async () => {
    try {
      await removeProductById(product._id);
      handleRemoved(product._id);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <tr className="align-center w-100">
      <td className="customDark text-center font-light flex-grow-1">
        {product._id}
      </td>
      <td className="customDark text-center font-light flex-grow-1">
        {product.title}
      </td>
      <td className="customDark text-center font-light flex-grow-1 truncate">
        {product.description}
      </td>

      <td className="customDark text-center font-light flex-grow-1">
        <div className="d-flex justify-content-center">
          {product.lens.map((art) => (
            <p key={art} className="me-1">
              {art},
            </p>
          ))}
        </div>
      </td>
      <td className="customDark text-center font-light flex-grow-1 truncate">
        {product.images.main}
      </td>
      <td className="customDark text-center font-light flex-grow-1">
        {product.price}
      </td>
      <td className="customDark text-center font-light flex-grow-1">
        {product.unitsInStock}
      </td>
      <td className="customDark text-center flex-grow-1">
        <DashButton dark>
          <EditIcon />
        </DashButton>
        <DashButton dark handleClick={removeProduct}>
          <RemoveIcon />
        </DashButton>
      </td>
    </tr>
  );
}

export default ProductsDashRow;
