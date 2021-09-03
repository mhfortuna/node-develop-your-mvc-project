import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postEmployee } from "../../../api/employeesApi";
import Button from "../../../components/Button";
import FloatInput from "../../../components/FloatInput";
import { PRIVATE } from "../../../constants/routes";
import withLayout from "../../../hoc/withLayout";

import addEmployeeSchema from "./addEmployee-schema";

function AddEmployee({ type = "Create New Employee" }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSetRole = (event) => {
    if (event.target.innerHTML === "Employee") {
      setIsAdmin(false);
    } else if (event.target.innerHTML === "Admin") {
      setIsAdmin(true);
    }
  };

  async function addEmployee(data) {
    try {
      await postEmployee(data);
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      isAdmin: isAdmin,
      profileImage:
        "https://screenfiction.org/content/image/0/59/405/d4aabcc6-full.webp",
    },
    validationSchema: addEmployeeSchema,
    onSubmit: (addEmployeeState) => {
      const newEmployee = { ...addEmployeeState, isAdmin: isAdmin };
      addEmployee(newEmployee);
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

export default withLayout(AddEmployee);
