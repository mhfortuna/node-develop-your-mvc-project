import React from "react";

import EmployeeRow from "../EmployeeRow";

export default function EmployeeListing({ handleRemoved, employees }) {
  return (
    <>
      {employees.map((employee) => (
        <EmployeeRow
          key={employee._id}
          employee={employee}
          handleRemoved={handleRemoved}
        />
      ))}
    </>
  );
}
