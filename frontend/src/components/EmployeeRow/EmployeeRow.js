import React from "react";

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
      <td>edit / remove</td>
    </>
  );
}

export default EmployeeRow;
