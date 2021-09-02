import React, { createContext, useReducer } from "react";

// import { CHECKOUT_CONTEXT_KEY } from "../constants/local-storage-keys";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  cardHolder: "",
  cardNumber: "",
  validMonth: "",
  validYear: "",
  cvc: "",
  paymentMethod: "",
};

const CheckoutContext = createContext(initialState);

const UPDATE_CHECKOUT = "UPDATE_CHECKOUT";
const CLEAR_CHECKOUT = "CLEAR_CHECKOUT";

function CheckoutReducer(state, action) {
  switch (action.type) {
    case UPDATE_CHECKOUT:
      //   localStorage.setItem(
      //     CHECKOUT_CONTEXT_KEY,
      //     JSON.stringify({ ...state, ...action.payload }),
      //   );
      return { ...state, ...action.payload };
    case CLEAR_CHECKOUT:
      return initialState;
    default:
      return state;
  }
}

export const CheckoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState);

  function updateCheckoutContext(data) {
    dispatch({
      type: "UPDATE_CHECKOUT",
      payload: data,
    });
  }

  function clearCheckoutContext() {
    dispatch({
      type: "CLEAR_CHECKOUT",
    });
  }

  return (
    <CheckoutContext.Provider
      value={{
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        email: state.email,
        address: state.address,
        zipCode: state.zipCode,
        city: state.city,
        country: state.country,
        cardHolder: state.cardHolder,
        cardNumber: state.cardNumber,
        validMonth: state.validMonth,
        validYear: state.validYear,
        cvc: state.cvc,
        paymentMethod: state.paymentMethod,
        updateCheckoutContext,
        clearCheckoutContext,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
