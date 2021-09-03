import React from "react";
import Button from "../../../components/Button";
import FloatInput from "../../../components/FloatInput";
import withLayout from "../../../hoc/withLayout";

function AddEmployee({ type = "Create New Employee" }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="row">
        <div className="col-8">
          <p className="big-text">{type}</p>
          <form onSubmit={handleSubmit}>
            <div className="col-8">
              <div className="row">
                <div className="col col-6">
                  <FloatInput
                    id="fullName"
                    type="text"
                    label="Full Name"
                    placeholder="Full name"
                    // handleChange={handleChange}
                  />
                </div>
                <div className="col col-6">
                  <FloatInput
                    id="email"
                    type="text"
                    label="Email"
                    placeholder="email"
                    // handleChange={handleChange}
                  />
                </div>
                <div className="col col-6">
                  <FloatInput
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    // handleChange={handleChange}
                  />
                </div>
                <div className="col col-6">
                  <FloatInput
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    // handleChange={handleChange}
                  />
                </div>
                <div className="col col-8">
                  <FloatInput
                    id="profileImage"
                    type="text"
                    label="Profile Image URL"
                    placeholder="Profile Image URL"
                    // handleChange={handleChange}
                  />
                </div>
                //TODO this must be a button to select admin or employee from
                <div className="col col-4">
                  <FloatInput
                    id="isAdmin"
                    type="text"
                    label="Role"
                    placeholder="Role"
                    // handleChange={handleChange}
                  />
                </div>
              </div>
              //TODO Create the "back" button
            </div>
            <div className="ms-auto col-4 big-mt px-5">
              <Button black onClick={handleSubmit}>
                Create Employee
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withLayout(AddEmployee);
