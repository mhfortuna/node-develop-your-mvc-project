import React from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function SignInDashboard() {
  return (
    <>
      <Header pageTitle="Sign in to Dashboard" />
      <div className="container flex-grow-1 align-items-center">
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
          </div>
          <div className="col-3" />
        </div>
      </div>
      <Footer />
    </>
  );
}
