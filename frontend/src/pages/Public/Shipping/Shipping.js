import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";
import CheckoutProductsList from "../../../components/CheckoutProductsList";
import CheckoutContext from "../../../context/checkout-context";

import { PUBLIC } from "../../../constants/routes";

import withLayout from "../../../hoc/withLayout";

function Shipping() {
  const [shippingState, setShippingState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });
  const [phone, setPhone] = useState();

  const { updateCheckoutContext } = useContext(CheckoutContext);
  const history = useHistory();

  const handleChange = (event) => {
    const target = event.target;
    const targetValue =
      target.type === "checkbox" ? target.checked : target.value;
    const targetName = target.id;

    setShippingState({
      ...shippingState,
      [targetName]: targetValue,
    });
  };

  const handleChangePhone = (e) => {
    const { value, maxLength } = e.target;
    const phoneNumber = value.slice(0, maxLength);

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setPhone(phoneNumber);
      return;
    }

    const x = phoneNumber
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
    const pattern = `${x[1] ?? x[1]} ${x[2] ?? x[2]} ${x[3] ?? x[3]}`;

    if (pattern.length > 2) {
      setPhone(pattern);
    }
    setShippingState({
      ...shippingState,
      phoneNumber: phoneNumber.replace(/\s+/g, ""),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCheckoutContext(shippingState);
    history.push(PUBLIC.PAYMENT);
  };

  return (
    <div className="row">
      <div className="col-8">
        <p className="big-text">Account information</p>
        <form onSubmit={handleSubmit}>
          <div className="col-8">
            <div className="row">
              <div className="col col-6">
                <FloatInput
                  id="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First name"
                  value={shippingState.firstName}
                  handleChange={handleChange}
                />
              </div>
              <div className="col col-6">
                <FloatInput
                  id="lastName"
                  type="text"
                  label="Last name"
                  placeholder="Last Name"
                  handleChange={handleChange}
                  value={shippingState.lastName}
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
                  handleChange={handleChangePhone}
                />
              </div>
              <div className="col col-6">
                <FloatInput
                  id="email"
                  type="email"
                  label="Email address"
                  placeholder="example@example.com"
                  handleChange={handleChange}
                  value={shippingState.email}
                />
              </div>

              <div className="col col-12">
                <FloatInput
                  id="address"
                  type="address"
                  label="Address"
                  placeholder="address"
                  handleChange={handleChange}
                  value={shippingState.address}
                />
              </div>

              <div className="col col-4">
                <FloatInput
                  id="zipCode"
                  type="number"
                  label="Zip code"
                  placeholder="zipCode"
                  maxLength={8}
                  handleChange={handleChange}
                  value={shippingState.zipCode}
                />
              </div>
              <div className="col col-4">
                <FloatInput
                  id="city"
                  type="text"
                  label="City"
                  placeholder="city"
                  handleChange={handleChange}
                  value={shippingState.city}
                />
              </div>
              <div className="col col-4">
                <FloatInput
                  id="country"
                  type="text"
                  label="Country"
                  placeholder="country"
                  handleChange={handleChange}
                  value={shippingState.country}
                />
              </div>
            </div>
          </div>
          <div className="ms-auto col-4 big-mt px-5">
            <Button black onClick={handleSubmit}>
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
