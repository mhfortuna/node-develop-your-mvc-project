import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";
import CheckoutProductsList from "../../../components/CheckoutProductsList";
import CheckoutContext from "../../../context/checkout-context";

import { PUBLIC } from "../../../constants/routes";

import withLayout from "../../../hoc/withLayout";

function Payment() {
  const [paymentState, setPaymentState] = useState({
    cardHolder: "",
    cardNumber: "",
    validMonth: "",
    validYear: "",
    cvc: "",
    paymentMethod: "paypal",
  });

  const { updateCheckoutContext } = useContext(CheckoutContext);
  const history = useHistory();

  const handleChange = (event) => {
    const target = event.target;
    const targetValue =
      target.type === "checkbox" ? target.checked : target.value;
    const targetName = target.id;

    setPaymentState({
      ...paymentState,
      [targetName]: targetValue,
    });
  };

  const handleMethodChange = (event) => {
    setPaymentState({
      ...paymentState,
      paymentMethod: event.target.innerHTML.toLowerCase(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCheckoutContext(paymentState);
    history.push(PUBLIC.SUMMARY);
  };

  return (
    <div className="row">
      <div className="col-8">
        <p className="big-text">Payment method</p>

        <div className="row col-10 m-0">
          <div className="col-6 mt-3">
            <Button
              black={paymentState.paymentMethod === "paypal"}
              transparent={paymentState.paymentMethod !== "paypal"}
              fullWidth
              onClick={handleMethodChange}
            >
              Paypal
            </Button>
          </div>
          <div className="col-6 mt-3">
            <Button
              black={paymentState.paymentMethod === "card"}
              transparent={paymentState.paymentMethod !== "card"}
              fullWidth
              onClick={handleMethodChange}
            >
              Card
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="col-10">
            <div className="row">
              <div className="col col-12">
                <FloatInput
                  id="cardHolder"
                  type="text"
                  label="Card holder"
                  placeholder="Card Holder"
                  onChange={handleChange}
                  value={paymentState.cardHolder}
                />
              </div>
              <div className="col col-12">
                <FloatInput
                  id="cardNumber"
                  type="text"
                  label="Card number"
                  placeholder="Card number"
                  onChange={handleChange}
                  value={paymentState.cardNumber}
                />
              </div>

              <div className="col col-3">
                <FloatInput
                  id="validMonth"
                  type="number"
                  label="MM"
                  placeholder="MM"
                  maxLength={2}
                  onChange={handleChange}
                  value={paymentState.validMonth}
                />
              </div>
              <div className="col col-3">
                <FloatInput
                  id="validYear"
                  type="text"
                  label="YY"
                  placeholder="YY"
                  onChange={handleChange}
                  value={paymentState.validYear}
                />
              </div>
              <div className="col col-6">
                <FloatInput
                  id="cvc"
                  type="text"
                  label="CVC"
                  placeholder="CVC"
                  onChange={handleChange}
                  value={paymentState.cvc}
                />
              </div>
            </div>
          </div>

          <div className="d-flex col-12 big-mt">
            <div className="col-2 mt-5">
              <Button black>Shipping details</Button>
            </div>
            <div className="ms-auto col-2 mt-5 big-mt">
              <Button black onClick={handleSubmit}>
                Summary
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-4">
        <CheckoutProductsList />
      </div>
    </div>
  );
}

export default withLayout(Payment);
