import React from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import "./SignUp.scss";

export default function SignUp() {
  return (
    <>
      <Header pageTitle="Sign up" />
      <div className="container flex-grow-1 align-items-center">
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <div className="row m-3">
              <FloatInput
                id="FirstInput"
                type="text"
                label="First Name"
                placeholder="First Name"
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
                <Button submitButton light fullWidth>
                  Log up with Google
                </Button>
              </div>
              <div className="col-6 pe-0">
                <Button submitButton light fullWidth>
                  Log up with Facebook
                </Button>
              </div>
            </div>
          </div>
          <div className="col-3" />
        </div>
      </div>
      <Footer />
    </>
  );
}
