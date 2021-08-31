import React from "react";
import DashButton from "../DashButton/DashButton";
import EditIcon from "../SVGIcons/EditIcon";
import RemoveIcon from "../SVGIcons/RemoveIcon";

function EmployeeRow({ image, name, email, role }) {
  return (
    <tr className="align-center">
      <td className="white text-center">{image}</td>
      <td className="white text-center">{name}</td>
      <td className="white text-center">{email}</td>
      {/* <td className="white text-center">{password}</td> */}
      <td className="white text-center">{role ? "Admin" : "Employee"}</td>
      <td className="text-center">
        <DashButton>
          <EditIcon />
        </DashButton>
        <DashButton>
          <RemoveIcon />
        </DashButton>
      </td>
    </tr>
  );
}

export default EmployeeRow;
