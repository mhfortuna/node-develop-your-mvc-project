import React, { useState } from "react";
import { useFormik } from "formik";

import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

import signUpSchema from "./sign-up-schema";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { syncUserData } from "../../../utils/auth-request";
import { signUpWithEmailAndPassword } from "../../../services/auth";

import "./SignUp.scss";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (signUpState) => {
      // updateCheckoutContext(shippingState);
      // history.push(PUBLIC.PAYMENT);

      setLoading(true);
      setLoggedIn(false);

      try {
        await signUpWithEmailAndPassword(
          signUpState.email,
          signUpState.password,
        );
        await syncUserData();
        setLoggedIn(true);
      } catch (error) {
        setLoginError(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Header pageTitle="Sign up" />
      <div className="container flex-grow-1 align-items-center">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            {/* <div className="col-3" /> */}
            <div className="col-6">
              <div className="row m-3">
                {loading}
                {loginError}
                {loggedIn}
                <FloatInput
                  id="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  errorMessage={formik.errors.firstName}
                  hasErrorMessage={formik.touched.firstName}
                />
              </div>
              <div className="row m-3">
                <FloatInput
                  id="email"
                  type="email"
                  label="E-mail"
                  placeholder="example@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  errorMessage={formik.errors.email}
                  hasErrorMessage={formik.touched.email}
                />
              </div>
              <div className="row m-3">
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
                  <Button light fullWidth>
                    Log up with Google
                  </Button>
                </div>
                <div className="col-6 pe-0">
                  <Button light fullWidth>
                    Log up with Facebook
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="col-3" /> */}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
