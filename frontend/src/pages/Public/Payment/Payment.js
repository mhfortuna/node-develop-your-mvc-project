import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useFormik } from "formik";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";
import CheckoutProductsList from "../../../components/CheckoutProductsList";
import CheckoutContext from "../../../context/checkout-context";

import paymentSchema from "./payment-schema";

import { PUBLIC } from "../../../constants/routes";

import withLayout from "../../../hoc/withLayout";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const { updateCheckoutContext } = useContext(CheckoutContext);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      cardHolder: "",
      cardNumber: "",
      validMonth: "",
      validYear: "",
      cvc: "",
    },
    validationSchema: paymentSchema,
    onSubmit: (paymentState) => {
      updateCheckoutContext({ ...paymentState, paymentMethod: paymentMethod });
      history.push(PUBLIC.SUMMARY);
    },
  });

  const handleMethodChange = (event) => {
    setPaymentMethod(event.target.innerHTML.toLowerCase());
  };

  return (
    <div className="row">
      <div className="col-8">
        <p className="big-text">Payment method</p>

        <div className="row col-10 m-0">
          <div className="col-6 mt-3">
            <Button
              black={paymentMethod === "paypal"}
              transparent={paymentMethod !== "paypal"}
              fullWidth
              onClick={handleMethodChange}
            >
              Paypal
            </Button>
          </div>
          <div className="col-6 mt-3">
            <Button
              black={paymentMethod === "card"}
              transparent={paymentMethod !== "card"}
              fullWidth
              onClick={handleMethodChange}
            >
              Card
            </Button>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="col-10">
            <div className="row">
              <div className="col col-12">
                <FloatInput
                  id="cardHolder"
                  type="text"
                  label="Card holder"
                  placeholder="Card Holder"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardHolder}
                  errorMessage={formik.errors.cardHolder}
                  hasErrorMessage={formik.touched.cardHolder}
                />
              </div>
              <div className="col col-12">
                <FloatInput
                  id="cardNumber"
                  type="text"
                  label="Card number"
                  placeholder="Card number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardNumber}
                  errorMessage={formik.errors.cardNumber}
                  hasErrorMessage={formik.touched.cardNumber}
                />
              </div>

              <div className="col col-3">
                <FloatInput
                  id="validMonth"
                  type="number"
                  label="MM"
                  placeholder="MM"
                  maxLength={2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.validMonth}
                  errorMessage={formik.errors.validMonth}
                  hasErrorMessage={formik.touched.validMonth}
                />
              </div>
              <div className="col col-3">
                <FloatInput
                  id="validYear"
                  type="text"
                  label="YY"
                  placeholder="YY"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.validYear}
                  errorMessage={formik.errors.validYear}
                  hasErrorMessage={formik.touched.validYear}
                />
              </div>
              <div className="col col-6">
                <FloatInput
                  id="cvc"
                  type="text"
                  label="CVC"
                  placeholder="CVC"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cvc}
                  errorMessage={formik.errors.cvc}
                  hasErrorMessage={formik.touched.cvc}
                />
              </div>
            </div>
          </div>

          <div className="d-flex col-12 big-mt">
            <div className="col-2 mt-5">
              <Link to={PUBLIC.SHIPPING}>
                <Button black>Shipping details</Button>
              </Link>
            </div>
            <div className="ms-auto col-2 mt-5 big-mt">
              <Button black submitButton>
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
