import React from "react";

import withLayout from "../../../hoc/withLayout";
import AddIcon from "../../../components/SVGIcons/AddIcon/AddIcon";
import DashButton from "../../../components/DashButton/DashButton";
import EmployeeListing from "../../../components/EmployeeListing";

import Button from "../../../components/Button";

function EmployeeDashboard() {
  const employees = [];

  return (
    <>
      <div className="d-flex mb-5">
        <div className="mt-5 me-3">
          <Button black>Users</Button>
        </div>
        <div className="mt-5 me-3">
          <Button transparent>Products</Button>
        </div>
      </div>

      <div className="table-responsive">
        {employees.length > 0 ? (
          <table className="table backgroundDark">
            <thead>
              <tr>
                <th scope="col" className="white text-center font-semi-bold">
                  Profile Image URL
                </th>
                <th scope="col" className="white text-center font-semi-bold">
                  User Name
                </th>
                <th scope="col" className="white text-center font-semi-bold">
                  Email
                </th>
                <th scope="col" className="white text-center font-semi-bold">
                  Role
                </th>
                <th scope="col" className="white text-center">
                  <DashButton white>
                    <AddIcon />
                  </DashButton>
                </th>
              </tr>
            </thead>
            <tbody>
              <EmployeeListing employees={employees} />
            </tbody>
          </table>
        ) : (
          <h1 className="w-100 text-center border border-2 p-2">
            No employees found
          </h1>
        )}
      </div>
    </>
  );
}

export default withLayout(EmployeeDashboard);
