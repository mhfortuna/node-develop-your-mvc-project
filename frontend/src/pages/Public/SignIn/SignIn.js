import React from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

export default function SignUp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3" />
        <div className="col-6">
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
                Sign in
              </Button>
            </div>
            <div className="col-9" />
          </div>
          <div className="row m-3 ext-sign">
            <div className="col-6">
              <Button submitButton grey>
                Log in with Google
              </Button>
            </div>
            <div className="col-6">
              <Button submitButton grey>
                Log in with Facebook
              </Button>
            </div>
          </div>
        </div>
        <div className="col-3" />
      </div>
    </div>
  );
}
