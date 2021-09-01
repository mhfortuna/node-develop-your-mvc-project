import React, { useState } from "react";
import FloatInput from "../../../components/FloatInput";
import Button from "../../../components/Button";
import CheckoutProductsList from "../../../components/CheckoutProductsList";

import withLayout from "../../../hoc/withLayout";

function Payment() {
  const [month, setMonth] = useState();

  const handleChangeMonth = (e) => {
    const { value, maxLength } = e.target;
    const maxValue = value.slice(0, maxLength);

    setMonth(maxValue);
  };

  return (
    <div className="row">
      <div className="col-8">
        <p className="big-text">Payment method</p>

        <div className="row col-10 m-0">
          <div className="col-6 mt-3">
            <Button black fullWidth>
              Paypal
            </Button>
          </div>
          <div className="col-6 mt-3">
            <Button transparent fullWidth>
              Card
            </Button>
          </div>
        </div>

        <form>
          <div className="col-10">
            <div className="row">
              <div className="col col-12">
                <FloatInput
                  id="cardHolder"
                  type="text"
                  label="Card holder"
                  placeholder="Card Holder"
                />
              </div>
              <div className="col col-12">
                <FloatInput
                  id="cardNumber"
                  type="text"
                  label="Card number"
                  placeholder="Card number"
                />
              </div>

              <div className="col col-3">
                <FloatInput
                  id="month"
                  type="number"
                  label="MM"
                  placeholder="MM"
                  maxLength={2}
                  value={month}
                  handleChange={handleChangeMonth}
                />
              </div>
              <div className="col col-3">
                <FloatInput id="year" type="text" label="YY" placeholder="YY" />
              </div>
              <div className="col col-6">
                <FloatInput
                  id="cvc"
                  type="text"
                  label="CVC"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>

          <div className="d-flex col-12 big-mt">
            <div className="col-2 mt-5">
              <Button black>Shipping details</Button>
            </div>
            <div className="ms-auto col-2 mt-5 big-mt">
              <Button black>Summary</Button>
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
