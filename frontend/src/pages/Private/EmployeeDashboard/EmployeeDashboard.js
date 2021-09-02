import React, { useEffect, useState } from "react";

import withLayout from "../../../hoc/withLayout";
import AddIcon from "../../../components/SVGIcons/AddIcon/AddIcon";
import DashButton from "../../../components/DashButton/DashButton";
import EmployeeListing from "../../../components/EmployeeListing";

import { getAllEmployees } from "../../../api";

import Button from "../../../components/Button";

function EmployeeDashboard() {
  const [employeesData, setEmployeesData] = useState([]);
  const [loadStatus, setLoadStatus] = useState({
    isError: false,
    isLoading: true,
  });

  async function loadAllEmployees() {
    try {
      const { data } = await getAllEmployees();
      setEmployeesData(data.foundEmployees);
      setLoadStatus({ isError: false, isLoading: false });
    } catch (error) {
      setLoadStatus({ isError: true, isLoading: false, error: error });
    }
  }

  useEffect(() => {
    loadAllEmployees();
  }, []);

  return (
    <>
      <div className="d-flex mb-5">
        <div className="mt-5 me-3">
          <Button black>Employees</Button>
        </div>
        <div className="mt-5 me-3">
          <Button transparent>Products</Button>
        </div>
      </div>

      <div className="table-responsive">
        {!loadStatus.isLoading && !loadStatus.isError && (
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
              <EmployeeListing employees={employeesData} />
            </tbody>
          </table>
        )}
        {loadStatus.isLoading && !loadStatus.isError && (
          <h3>Currently loading...</h3>
        )}
        {loadStatus.isError && !loadStatus.isLoading && <h3>ERROR</h3>}
      </div>
    </>
  );
}

export default withLayout(EmployeeDashboard);
