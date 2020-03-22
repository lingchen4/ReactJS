export const removeFromCart = index => ({
  type: "REMOVE_FROM_CART",
  index
});

export const addToCart = item => ({
  type: "ADD_TO_CART",
  item
});
