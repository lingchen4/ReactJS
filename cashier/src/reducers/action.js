import { REDO, UNDO, ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  index
});

export const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

export const undo = () => ({
  type: UNDO
});

export const redo = () => ({
  type: REDO
});
