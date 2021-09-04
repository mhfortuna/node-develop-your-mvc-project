import React from "react";
import { Link } from "react-router-dom";
import { removeEmployeeById } from "../../api";
import { PRIVATE } from "../../constants/routes";
import DashButton from "../DashButton/DashButton";
import EditIcon from "../SVGIcons/EditIcon";
import RemoveIcon from "../SVGIcons/RemoveIcon";

function EmployeeRow({ employee, handleRemoved }) {
  const handleError = () => {};

  const removeEmployee = async () => {
    try {
      await removeEmployeeById(employee._id);
      handleRemoved(employee._id);
    } catch (error) {
      handleError(error);
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
        <Link to={`${PRIVATE.EDIT_EMPLOYEE}/${employee._id}`}>
          <DashButton white>
            <EditIcon />
          </DashButton>
        </Link>
        <DashButton white handleClick={removeEmployee}>
          <RemoveIcon />
        </DashButton>
      </td>
    </tr>
  );
}

export default EmployeeRow;
