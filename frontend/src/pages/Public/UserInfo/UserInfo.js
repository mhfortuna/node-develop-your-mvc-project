import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useFormik } from "formik";

import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";

import userSchema from "./user-schema";

import { PUBLIC } from "../../../constants/routes";

import withLayout from "../../../hoc/withLayout";

import { getClient } from "../../../api";

function UserInfo() {
  const [phone, setPhone] = useState();
  const [loadStatus, setLoadStatus] = useState({
    isError: false,
    isLoading: true,
  });
  const { clientId } = useRouteMatch(`${PUBLIC.USER_INFO}/:clientId`).params;

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
    },
    validationSchema: userSchema,
    enableReinitialize: true,
    onSubmit: (accountState) => {
      // updateCheckoutContext(shippingState);
      // history.push(PUBLIC.PAYMENT);
      console.log(accountState);
      console.log(history);
    },
  });

  async function loadClientData(id) {
    try {
      const { data } = await getClient(id);
      formik.setValues({
        address: data.data.address || "",
        city: data.data.city || "",
        country: data.data.country || "",
        email: data.data.email || "",
        firstName: data.data.firstName || "",
        lastName: data.data.lastName || "",
        phoneNumber: data.data.phoneNumber || "",
        zipCode: data.data.zipCode || "",
      });
      setLoadStatus({ isError: false, isLoading: false });
    } catch (error) {
      setLoadStatus({ isError: true, isLoading: false, error: error });
    }
  }

  useEffect(() => {
    // if (phoneNumber) setPhone(phoneNumber);
    loadClientData(clientId);
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
    <>
      <div className="col-6">
        <p className="big-text">Account information</p>
        <form>
          <div className="row">
            <div className="col col-6">
              {!loadStatus.isLoading && !loadStatus.isError && (
                <h3>Data loaded</h3>
              )}
              {loadStatus.isLoading && !loadStatus.isError && (
                <h3>Currently loading...</h3>
              )}
              {loadStatus.isError && !loadStatus.isLoading && <h3>ERROR</h3>}
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

          <div className="d-flex mt-5">
            <div className="d-inline-block ms-auto">
              <Button submitButton black>
                Edit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default withLayout(UserInfo);
