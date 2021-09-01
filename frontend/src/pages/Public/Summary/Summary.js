import React from "react";
import Button from "../../../components/Button";
// import CheckoutProductsList from "../../../components/CheckoutProductsList";

import withLayout from "../../../hoc/withLayout";

function Summary() {
  return (
    <>
      <div className="row col-10">
        <h2 className="big-text mb-3">Summary</h2>

        <section className="col-6">
          <h3 className="font-bold fs-2 mb-3">Customer information</h3>

          <div className="row">
            <div className="col-4">
              <div>
                <p className="font-bold mb-0">First name</p>
                <p>Joe</p>
              </div>
              <div>
                <p className="font-bold mb-0">Last name</p>
                <p>Joe</p>
              </div>
              <div>
                <p className="font-bold mb-0">Phone</p>
                <p>686 507 212</p>
              </div>
              <div>
                <p className="font-bold mb-0">E-mail</p>
                <p>ex@ex.com</p>
              </div>
            </div>

            <div className="col-4">
              <div>
                <p className="font-bold mb-0">Address</p>
                <p>Address</p>
              </div>
              <div>
                <p className="font-bold mb-0">Zip code</p>
                <p>Zip code</p>
              </div>
              <div>
                <p className="font-bold mb-0">City</p>
                <p>City</p>
              </div>
              <div>
                <p className="font-bold mb-0">State</p>
                <p>State</p>
              </div>
            </div>
          </div>
        </section>

        <section className="col-6">Aqui va CheckoutProductsList</section>
      </div>

      <div className="row mt-5">
        <div className="col-2 big-mt">
          <Button black>Payment method</Button>
        </div>
        <div className="ms-auto col-1 big-mt">
          <Button black> Home</Button>
        </div>
      </div>
    </>
  );
}

export default withLayout(Summary);
