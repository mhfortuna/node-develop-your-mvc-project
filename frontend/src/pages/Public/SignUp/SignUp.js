import React from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3" />
        <div className="col-6">
          <div className="row m-3">
            <FloatInput
              id="FirstInput"
              type="text"
              label="Full Name"
              placeholder="Full Name"
            />
          </div>
          <div className="row m-3">
            <FloatInput
              id="FirstInput"
              type="email"
              label="E-mail"
              placeholder="example@example.com"
            />
          </div>
          <div className="row m-3">
            <FloatInput
              id="FirstInput"
              type="password"
              label="Password"
              placeholder="Password"
            />
          </div>
          <div className="row m-3">
            <div className="col-3">
              <Button submitButton black>
                Sign up
              </Button>
            </div>
            <div className="col-9" />
          </div>
          <div className="row m-3 pt-3 me-4 ms-4 ext-sign">
            <div className="col-6 ps-0">
              <Button submitButton grey>
                Log up with Google
              </Button>
            </div>
            <div className="col-6 pe-0">
              <Button submitButton grey>
                Log up with Facebook
              </Button>
            </div>
          </div>
        </div>
        <div className="col-3" />
      </div>
    </div>
  );
}
