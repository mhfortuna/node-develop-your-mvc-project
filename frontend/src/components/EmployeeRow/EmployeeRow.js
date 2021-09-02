import React from "react";
import { removeEmployeeById } from "../../api";
import DashButton from "../DashButton/DashButton";
import EditIcon from "../SVGIcons/EditIcon";
import RemoveIcon from "../SVGIcons/RemoveIcon";

function EmployeeRow({ employee, handleRemoved }) {
  const removeEmployee = async () => {
    console.log(`boton click on ${employee._id}`);
    try {
      await removeEmployeeById(employee._id);
      handleRemoved(employee._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="align-center w-100">
      <td className="white text-center font-light flex-grow-1">
        {employee.profileImage}
      </td>
      <td className="white text-center font-light flex-grow-1">
        {employee.fullName}
      </td>
      <td className="white text-center font-light flex-grow-1">
        {employee.email}
      </td>
      <td className="white text-center font-light flex-grow-1">
        {employee.isAdmin ? "Admin" : "Employee"}
      </td>
      <td className="text-center flex-grow-1">
        <DashButton white>
          <EditIcon />
        </DashButton>
        <DashButton white handleClick={removeEmployee}>
          <RemoveIcon />
        </DashButton>
      </td>
    </tr>
  );
}

export default EmployeeRow;
