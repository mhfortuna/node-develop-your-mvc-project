import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { useHistory, Link } from "react-router-dom";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";
import signInSchema from "./sign-in-schema";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AuthContext from "../../../context/auth-context";

import { syncUserData } from "../../../utils/auth-request";

import {
  signInWithEmailAndPassword,
  getCurrentUserToken,
} from "../../../services/auth";
import { PUBLIC } from "../../../constants/routes";

import "./SignIn.scss";

export default function SignUp() {
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (signInState) => {
      try {
        await signInWithEmailAndPassword(
          signInState.email,
          signInState.password,
        );
        const data = await syncUserData();
        const token = await getCurrentUserToken();
        login({
          email: signInState.email,
          token: token,
          userId: data.data.userId._id,
        });

        history.push(PUBLIC.HOME);
      } catch (error) {
        setLoginError(error.message);
      }
    },
  });

  return (
    <>
      <Header pageTitle="Sign in" />
      <div className="container flex-grow-1 align-items-center">
        <div className="row">
          {loginError}
          <form onSubmit={formik.handleSubmit}>
            <div className="col-3" />
            <div className="col-6">
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
              <div className="d-flex m-4">
                <div className="col-6">
                  <Button submitButton black>
                    Sign in
                  </Button>
                </div>
                <div className="col-2 ms-auto">
                  <Link to={PUBLIC.SIGNUP}>
                    <Button black>Sign up</Button>
                  </Link>
                </div>
              </div>

              <div className="row m-3 pt-3 me-4 ms-4 ext-sign">
                <div className="col-6 ps-0">
                  <Button submitButton light fullWidth>
                    Log in with Google
                  </Button>
                </div>
                <div className="col-6 pe-0">
                  <Button submitButton light fullWidth>
                    Log in with Facebook
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-3" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
