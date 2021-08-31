import React from "react";

import withLayout from "../../../hoc/withLayout";

// import EmployeeListing from "../../../components/EmployeeListing";

// handleEditEmployee,
// handleRemoveEmployee,,

function UserDashboard() {
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
        <div className="btn btn-primary me-3">Users</div>
        <div className="btn btn-secondary">Products</div>
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Profile Image URL</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
            <th scope="col">+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>https://m.media...</td>
            <td>Otto Clay</td>
            <td>clayOtto@gmail.com</td>
            <td>1123fdsasf22330123fsd213</td>
            <td>admin</td>
            <td>edit / remove</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default withLayout(UserDashboard);
