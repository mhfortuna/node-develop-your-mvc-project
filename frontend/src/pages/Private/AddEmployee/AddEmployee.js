import React from "react";
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
                <FloatInput
                  id="email"
                  type="text"
                  label="Email"
                  placeholder="email"
                  // handleChange={handleChange}
                />

                <FloatInput
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  // handleChange={handleChange}
                />
                <FloatInput
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  // handleChange={handleChange}
                />
                <FloatInput
                  id="profileImage"
                  type="text"
                  label="Profile Image URL"
                  placeholder="Profile Image URL"
                  // handleChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withLayout(AddEmployee);
