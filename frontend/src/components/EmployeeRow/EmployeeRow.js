import React from "react";
import DashButton from "../DashButton/DashButton";
import EditIcon from "../SVGIcons/EditIcon";
import RemoveIcon from "../SVGIcons/RemoveIcon";

function EmployeeRow({ image, name, email, role }) {
  return (
    <tr className="align-center w-100">
      <td className="white text-center font-light flex-grow-1">{image}</td>
      <td className="white text-center font-light flex-grow-1">{name}</td>
      <td className="white text-center font-light flex-grow-1">{email}</td>
      <td className="white text-center font-light flex-grow-1">
        {role ? "Admin" : "Employee"}
      </td>
      <td className="text-center flex-grow-1">
        <DashButton white>
          <EditIcon />
        </DashButton>
        <DashButton white>
          <RemoveIcon />
        </DashButton>
      </td>
    </tr>
  );
}

export default EmployeeRow;
