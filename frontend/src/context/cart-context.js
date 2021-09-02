import React, { createContext, useReducer, useEffect } from "react";

import { CART_CONTEXT_KEY } from "../constants/local-storage-keys";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem(CART_CONTEXT_KEY)) || [],
};

const CartContext = createContext(initialState);

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_CART = "CLEAR_CART";

function CartReducer(state, action) {
  const { cartItems } = state;

  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cartItems: [...cartItems, action.payload] };

    case REMOVE_ITEM: {
      const updatedCart = cartItems.filter(
        (item) => item.id !== action.payload,
      );
      return { ...state, cartItems: updatedCart };
    }

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    localStorage.setItem(CART_CONTEXT_KEY, JSON.stringify(state.cartItems));
  }, [state]);

  function addItemContext(data) {
    dispatch({
      type: "ADD_ITEM",
      payload: data,
    });
  }

  function removeItemContext(productId) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: productId,
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
