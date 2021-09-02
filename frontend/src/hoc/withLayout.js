import React, { useContext } from "react";

import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";

import CartContext from "../context/cart-context";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    const { cartItems } = useContext(CartContext);
    let IsCartItems = false;

    if (cartItems.length > 0) {
      IsCartItems = true;
    }

    return (
      <>
        <Header
          pageTitle="The Camera Project"
          isLogged
          IsCartItems={IsCartItems}
        />
        <Main>
          <WrappedComponent {...props} />
        </Main>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
