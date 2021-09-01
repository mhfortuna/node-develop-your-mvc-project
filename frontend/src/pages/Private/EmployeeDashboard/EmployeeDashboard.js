import React from "react";

import withLayout from "../../../hoc/withLayout";
import AddIcon from "../../../components/SVGIcons/AddIcon/AddIcon";
import DashButton from "../../../components/DashButton/DashButton";
import EmployeeListing from "../../../components/EmployeeListing";

import Button from "../../../components/Button";

function EmployeeDashboard() {
  const employees = [
    {
      fullName: "Mathias Fortuna",
      email: "mathias@teamrocket.es",
      // Password: 123
      password: "$2b$10$GVOAlSA4v6h8wteprLFsQuaM9FptKB/DW0L83wGnbClichSY9HP9a",
      isAdmin: true,
      profileImage:
        "https://screenfiction.org/content/image/0/59/405/d4aabcc6-full.webp",
    },
    {
      fullName: "Nacho Montoya",
      email: "nacho@teamrocket.es",
      // Password: 123
      password: "$2b$10$GVOAlSA4v6h8wteprLFsQuaM9FptKB/DW0L83wGnbClichSY9HP9a",
      isAdmin: false,
      profileImage:
        "https://screenfiction.org/content/image/0/59/405/d4aabcc6-full.webp",
    },
    {
      fullName: "Ricard Garcia",
      email: "rick@teamrocket.es",
      // Password: 123
      password: "$2b$10$GVOAlSA4v6h8wteprLFsQuaM9FptKB/DW0L83wGnbClichSY9HP9a",
      isAdmin: false,
      profileImage:
        "https://screenfiction.org/content/image/0/59/405/d4aabcc6-full.webp",
    },
    {
      fullName: "Hugo Gomez",
      email: "huguito@teamrocket.es",
      // Password: 123
      password: "$2b$10$GVOAlSA4v6h8wteprLFsQuaM9FptKB/DW0L83wGnbClichSY9HP9a",
      isAdmin: false,
      profileImage:
        "https://screenfiction.org/content/image/0/59/405/d4aabcc6-full.webp",
    },
    {
      fullName: "Brahim Benalia",
      email: "brahim@teamrocket.es",
      // Password: 123
      password: "$2b$10$GVOAlSA4v6h8wteprLFsQuaM9FptKB/DW0L83wGnbClichSY9HP9a",
      isAdmin: false,
      profileImage:
        "https://screenfiction.org/content/image/0/59/405/d4aabcc6-full.webp",
    },
  ];

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
        <table className="table backgroundDark">
          <thead>
            <tr>
              <th
                scope="col"
                className="white text-center font-semi-bold flex-grow-1"
              >
                Profile Image URL
              </th>
              <th
                scope="col"
                className="white text-center font-semi-bold flex-grow-1"
              >
                User Name
              </th>
              <th
                scope="col"
                className="white text-center font-semi-bold flex-grow-1"
              >
                Email
              </th>
              <th scope="col" className="white text-center font-semi-bold">
                Role
              </th>
              <th scope="col" className="white text-center">
                <DashButton>
                  <AddIcon />
                </DashButton>
              </th>
            </tr>
          </thead>
          <tbody>
            <EmployeeListing employees={employees} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default withLayout(EmployeeDashboard);
