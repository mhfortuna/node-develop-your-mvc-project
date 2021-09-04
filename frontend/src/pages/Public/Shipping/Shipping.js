import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";
import CheckoutProductsList from "../../../components/CheckoutProductsList";
import CheckoutContext from "../../../context/checkout-context";

import shippingSchema from "./shipping-schema";

import { PUBLIC } from "../../../constants/routes";

import withLayout from "../../../hoc/withLayout";

function Shipping() {
  const [phone, setPhone] = useState();

  const {
    updateCheckoutContext,
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    zipCode,
    city,
    country,
  } = useContext(CheckoutContext);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      phoneNumber: phoneNumber || "",
      email: email || "",
      address: address || "",
      zipCode: zipCode || "",
      city: city || "",
      country: country || "",
    },
    validationSchema: shippingSchema,
    onSubmit: (shippingState) => {
      updateCheckoutContext(shippingState);
      history.push(PUBLIC.PAYMENT);
    },
  });

  useEffect(() => {
    if (phoneNumber) setPhone(phoneNumber);
  }, []);

  const handleChangePhone = (e) => {
    const { value, maxLength } = e.target;
    const pNumber = value.slice(0, maxLength);

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setPhone(pNumber);
      formik.values.phoneNumber = pNumber.replace(/\s+/g, "");
      return;
    }

    const x = pNumber.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
    const pattern = `${x[1] ?? x[1]} ${x[2] ?? x[2]} ${x[3] ?? x[3]}`;

    if (pattern.length > 2) {
      setPhone(pattern);
    }
    formik.values.phoneNumber = pNumber.replace(/\s+/g, "");
  };

  return (
    <div className="row">
      <div className="col-8">
        <p className="big-text">Account information</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="col-8">
            <div className="row">
              <div className="col col-6">
                <FloatInput
                  id="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  errorMessage={formik.errors.firstName}
                  hasErrorMessage={formik.touched.firstName}
                />
              </div>
              <div className="col col-6">
                <FloatInput
                  id="lastName"
                  type="text"
                  label="Last name"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  errorMessage={formik.errors.lastName}
                  hasErrorMessage={formik.touched.lastName}
                />
              </div>

              <div className="col col-6">
                <FloatInput
                  id="phoneNumber"
                  type="text"
                  label="Phone number"
                  placeholder="Phone Number"
                  maxLength={11}
                  value={phone}
                  onChange={handleChangePhone}
                  onBlur={formik.handleBlur}
                  errorMessage={formik.errors.phoneNumber}
                  hasErrorMessage={formik.touched.phoneNumber}
                />
              </div>
              <div className="col col-6">
                <FloatInput
                  id="email"
                  type="email"
                  label="Email address"
                  placeholder="example@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  errorMessage={formik.errors.email}
                  hasErrorMessage={formik.touched.email}
                />
              </div>

              <div className="col col-12">
                <FloatInput
                  id="address"
                  type="address"
                  label="Address"
                  placeholder="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  errorMessage={formik.errors.address}
                  hasErrorMessage={formik.touched.address}
                />
              </div>

              <div className="col col-4">
                <FloatInput
                  id="zipCode"
                  type="number"
                  label="Zip code"
                  placeholder="zipCode"
                  maxLength={8}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                  errorMessage={formik.errors.zipCode}
                  hasErrorMessage={formik.touched.zipCode}
                />
              </div>
              <div className="col col-4">
                <FloatInput
                  id="city"
                  type="text"
                  label="City"
                  placeholder="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  errorMessage={formik.errors.city}
                  hasErrorMessage={formik.touched.city}
                />
              </div>
              <div className="col col-4">
                <FloatInput
                  id="country"
                  type="text"
                  label="Country"
                  placeholder="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  errorMessage={formik.errors.country}
                  hasErrorMessage={formik.touched.country}
                />
              </div>
            </div>
          </div>
          <div className="ms-auto col-4 big-mt px-5">
            <Button black submitButton>
              Payment method
            </Button>
          </div>
        </form>
      </div>

      <div className="col-4">
        <CheckoutProductsList />
      </div>
    </div>
  );
}

export default withLayout(Shipping);
