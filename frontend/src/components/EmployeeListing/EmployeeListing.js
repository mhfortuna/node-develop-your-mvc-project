import React from "react";

import EmployeeRow from "../EmployeeRow";

export default function EmployeeListing({
  employees,
  handleEditEmployee,
  handleRemoveEmployee,
  // ...props
}) {
  return (
    <tr>
      {employees.map((employee) => (
        <EmployeeRow
          key={employee.email}
          image={employee.profileImage}
          name={employee.fullName}
          email={employee.email}
          password={employee.password}
          role={employee.isAdmin}
          handleEditEmployee={handleEditEmployee}
          handleRemoveEmployee={handleRemoveEmployee}
        />
      ))}
    </tr>
  );
}
