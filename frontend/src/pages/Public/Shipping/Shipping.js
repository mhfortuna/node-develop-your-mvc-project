import React, { useState } from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";
import CheckoutProductsList from "../../../components/CheckoutProductsList";

import withLayout from "../../../hoc/withLayout";

function Shipping() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

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
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-8">
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
                  value={name}
                  handleChange={handleChangeName}
                  handleBlur={handleChangeName}
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
          </div>
          <div className="ms-auto col-4 big-mt px-5">
            <Button black>Payment method</Button>
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
