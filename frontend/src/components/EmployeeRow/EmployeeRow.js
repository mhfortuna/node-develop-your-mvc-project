import React from "react";

import EditBtn from "../EditBtn";

function EmployeeRow({
  image,
  name,
  email,
  password,
  role,
  handleEditEmployee,
  handleRemoveEmployee,
}) {
  function onEditEmploye() {
    handleEditEmployee(id);
  }
  function onRemoveEmployee() {
    handleRemoveEmployee(id);
  }

  return (
    <>
      <td>{image}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{password}</td>
      <td>{role ? "Admin" : "Employee"}</td>
      <td>
        <EditBtn />
      </td>
    </>
  );
}

export default EmployeeRow;
