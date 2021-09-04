import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../../../components/Button";
import CheckoutProductsList from "../../../components/CheckoutProductsList";
import CheckoutContext from "../../../context/checkout-context";
import CartContext from "../../../context/cart-context";

import { PUBLIC } from "../../../constants/routes";
import { postOrder } from "../../../api";

import withLayout from "../../../hoc/withLayout";

function Summary() {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    zipCode,
    city,
    country,
    clearCheckoutContext,
  } = useContext(CheckoutContext);

  const { cartItems, clearCartContext } = useContext(CartContext);
  const [status, setStatus] = useState({ error: false, message: "" });

  const history = useHistory();

  const order = {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    zipCode,
    city,
    country,
    products: cartItems,
  };

  async function addOrder() {
    try {
      await postOrder(order);
    } catch (error) {
      throw new Error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      addOrder();

      clearCheckoutContext();
      clearCartContext();

      history.push(PUBLIC.HOME);
    } catch (error) {
      setStatus({ ...status, error: true, message: error.message });
    }
  };

  return (
    <>
      <div className="row col-10">
        <section className="col-6">
          <h2 className="big-text mb-3">Summary</h2>

          {status.error && <h3>ERROR: {status.message} </h3>}

          <h3 className="font-bold medium-big-text mb-3">
            Customer information
          </h3>

          <div className="row">
            <div className="col-6">
              <div>
                <p className="font-bold mb-0">First name</p>
                <p>{firstName}</p>
              </div>
              <div>
                <p className="font-bold mb-0">Last name</p>
                <p>{lastName}</p>
              </div>
              <div>
                <p className="font-bold mb-0">Phone</p>
                <p>{phoneNumber}</p>
              </div>
              <div>
                <p className="font-bold mb-0">E-mail</p>
                <p>{email}</p>
              </div>
            </div>

            <div className="col-4">
              <div>
                <p className="font-bold mb-0">Address</p>
                <p>{address}</p>
              </div>
              <div>
                <p className="font-bold mb-0">Zip code</p>
                <p>{zipCode}</p>
              </div>
              <div>
                <p className="font-bold mb-0">City</p>
                <p>{city}</p>
              </div>
              <div>
                <p className="font-bold mb-0">Country</p>
                <p>{country}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="col-6">
          <CheckoutProductsList />
        </section>
      </div>

      <div className="row mt-5">
        <div className="col-2 big-mt">
          <Link to={PUBLIC.PAYMENT}>
            <Button black>Payment method</Button>
          </Link>
        </div>
        <div className="ms-auto col-1 big-mt">
          <Button onClick={handleSubmit} black>
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}

export default withLayout(Summary);
