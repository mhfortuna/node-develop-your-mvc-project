import React from "react";
import DashButton from "../DashButton/DashButton";
import EditIcon from "../SVGIcons/EditIcon";
import RemoveIcon from "../SVGIcons/RemoveIcon";

function ProductsDashRow({
  id,
  productName,
  description,
  lens,
  image,
  price,
  stock,
}) {
  return (
    <tr className="align-center w-100">
      <td className="customDark text-center font-light flex-grow-1">{id}</td>
      <td className="customDark text-center font-light flex-grow-1">
        {productName}
      </td>
      <td
        className="customDark text-center font-light flex-grow-1 text-truncate w-25"
        style={{ maxWidth: "150px" }}
      >
        {description}
      </td>

      <td className="customDark text-center font-light flex-grow-1">
        <div className="d-flex">
          {lens.map((art) => (
            <p key={art} className="me-1">
              {art},
            </p>
          ))}
        </div>
      </td>
      <td
        className="customDark text-center font-light flex-grow-1 text-truncate"
        style={{ maxWidth: "150px" }}
      >
        {image}
      </td>
      <td className="customDark text-center font-light flex-grow-1">{price}</td>
      <td className="customDark text-center font-light flex-grow-1">{stock}</td>
      <td className="customDark text-center flex-grow-1">
        <DashButton className="customB">
          <EditIcon />
        </DashButton>
        <DashButton>
          <RemoveIcon />
        </DashButton>
      </td>
    </tr>
  );
}

export default ProductsDashRow;
