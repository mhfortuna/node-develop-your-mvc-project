import React, { createContext, useReducer } from "react";

// import { CART_CONTEXT_KEY } from "../constants/local-storage-keys";

const initialState = {
  cartItems: [],
};

const CartContext = createContext(initialState);

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_CART = "CLEAR_CART";

function CartReducer(state, action) {
  const { cartItems } = state;

  switch (action.type) {
    case ADD_ITEM:
      //   localStorage.setItem(
      //     CART_CONTEXT_KEY,
      //     JSON.stringify({ ...state, cartItems: [...cartItems, action.payload] }),
      //   );
      return { ...state, cartItems: [...cartItems, action.payload] };
    case REMOVE_ITEM:
      //   localStorage.setItem(
      //     CART_CONTEXT_KEY,
      //     JSON.stringify({ ...state, cartItems: [...cartItems, action.payload] }),
      //   );
      return { ...state, cartItems: [...cartItems, action.payload] };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  function addItemContext(data) {
    dispatch({
      type: "ADD_ITEM",
      payload: data,
    });
  }

  function removeItemContext(data) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: data,
    });
  }

  function clearCartContext() {
    dispatch({
      type: "CLEAR_CART",
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addItemContext,
        removeItemContext,
        clearCartContext,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
