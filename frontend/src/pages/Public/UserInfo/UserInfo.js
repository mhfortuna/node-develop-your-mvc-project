import React from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

import withLayout from "../../../hoc/withLayout";

function UserInfo() {
  return (
    <div>
      <p className="big-text">Account information</p>
      <form>
        <div className="col-8">
          <div className="row">
            <div className="col col-6">
              <FloatInput
                id="firstName"
                type="text"
                label="First Name"
                placeholder="First name"
              />
            </div>
            <div className="col col-6">
              <FloatInput
                id="lastName"
                type="text"
                label="Last name"
                placeholder="Last Name"
              />
            </div>

            <div className="col col-6">
              <FloatInput
                id="phoneNumber"
                type="number"
                label="Phone number"
                placeholder="Phone Number"
                maxLength={9}
              />
            </div>
            <div className="col col-6">
              <FloatInput
                id="email"
                type="email"
                label="Email address"
                placeholder="example@example.com"
              />
            </div>

            <div className="col col-12">
              <FloatInput
                id="address"
                type="address"
                label="Address"
                placeholder="address"
              />
            </div>

            <div className="col col-4">
              <FloatInput
                id="zipCode"
                type="number"
                label="Zip code"
                placeholder="zipCode"
                maxLength={8}
              />
            </div>
            <div className="col col-4">
              <FloatInput
                id="city"
                type="text"
                label="City"
                placeholder="city"
              />
            </div>
            <div className="col col-4">
              <FloatInput
                id="country"
                type="text"
                label="Country"
                placeholder="country"
              />
            </div>
          </div>

          <div className="bg-dark ms-auto col-1 mt-5">
            <Button submitButton black>
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withLayout(UserInfo);
