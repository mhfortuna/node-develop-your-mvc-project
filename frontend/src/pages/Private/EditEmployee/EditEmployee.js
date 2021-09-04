import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// import { postEmployee } from "../../../api/employeesApi";
import Button from "../../../components/Button";
import FloatInput from "../../../components/FloatInput";
import { PRIVATE } from "../../../constants/routes";
import withLayout from "../../../hoc/withLayout";

import addEmployeeSchema from "../AddEmployee/addEmployee-schema";

import { getEmployeeById } from "../../../api";

function EditEmployee({ type = "Edit Employee" }) {
  const { employeeId } = useRouteMatch(
    `${PRIVATE.EDIT_EMPLOYEE}/:employeeId`,
  ).params;
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState({});
  // const [loadStatus, setLoadStatus] = useState({
  //   isError: false,
  //   isLoading: true,
  // });
  // const
  async function loadEmployee() {
    try {
      const { data } = await getEmployeeById(employeeId);
      setEmployee(data.foundEmployee);
      // setLoadStatus({ isError: false, isLoading: false });
    } catch (error) {
      console.log(error);
      // setLoadStatus({ isError: true, isLoading: false, error: error });
    }
  }

  useEffect(() => {
    loadEmployee();
  }, []);

  const handleSetRole = (event) => {
    if (event.target.innerHTML === "Employee") {
      setIsAdmin(false);
    } else if (event.target.innerHTML === "Admin") {
      setIsAdmin(true);
    }
  };
  console.log(employee.fullName);

  const formik = useFormik({
    initialValues: {
      fullName: employee.fullName,
      email: employee.email,
      password: employee.password,
      isAdmin: employee.isAdmin,
      profileImage: employee.profileImage,
    },
    validationSchema: addEmployeeSchema,
    onSubmit: (addEmployeeState) => {
      const newEmployee = { ...addEmployeeState, isAdmin: isAdmin };
      console.log(newEmployee);
      // addEmployee(newEmployee);
    },
  });

  return (
    <>
      <div className="row">
        <div className="col-8">
          <p className="big-text">{type}</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="col-8">
              <div className="row">
                <div className="col col-12">
                  <FloatInput
                    id="fullName"
                    type="text"
                    label="Full Name"
                    placeholder="Full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    errorMessage={formik.errors.fullName}
                    hasErrorMessage={formik.touched.fullName}
                  />
                </div>
                <div className="col col-12">
                  <FloatInput
                    id="email"
                    type="text"
                    label="Email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    errorMessage={formik.errors.email}
                    hasErrorMessage={formik.touched.email}
                  />
                </div>
                <div className="col col-12">
                  <FloatInput
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    errorMessage={formik.errors.password}
                    hasErrorMessage={formik.touched.password}
                  />
                </div>
                <div className="col col-12">
                  <FloatInput
                    id="profileImage"
                    type="text"
                    label="Profile Image URL"
                    placeholder="Profile Image URL"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.profileImage}
                    errorMessage={formik.errors.profileImage}
                    hasErrorMessage={formik.touched.profileImage}
                  />
                </div>

                <div className="col-6 mt-3">
                  <Button
                    black={isAdmin === false}
                    fullWidth
                    transparent={isAdmin === true}
                    onClick={handleSetRole}
                  >
                    Employee
                  </Button>
                </div>
                <div className="col-6 mt-3">
                  <Button
                    black={isAdmin === true}
                    fullWidth
                    transparent={isAdmin === false}
                    onClick={handleSetRole}
                  >
                    Admin
                  </Button>
                </div>
              </div>
            </div>
            <div className="col col-12 d-flex big-mt justify-content-between">
              <div className="col col-3 button-wrapper w-25">
                <Link to={PRIVATE.DASHBOARD_USERS}>
                  <Button black>Back</Button>
                </Link>
              </div>
              <div className="col col-3 button-wrapper w-25">
                <Button black submitButton>
                  Create Employee
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withLayout(EditEmployee);