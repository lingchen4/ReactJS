import { GROCERY_ITEMS } from "./data";

export default (state, action) => {
  if (state === undefined) {
    return {
      forSale: GROCERY_ITEMS,
      cart: [],
      history: [[]],
      historyIndex: 0
    };
  }

  switch (action.type) {
    case "ADD_TO_CART": {
      const cart = [...state.cart, action.item];
      const history = [...state.history, cart];
      const historyIndex = state.historyIndex + 1;
      return {
        ...state,
        cart,
        historyIndex,
        history
      };
    }
    case "REMOVE_FROM_CART": {
      const cart = [...state.cart];
      cart.splice(action.index, 1);

      const history = [...state.history, cart];
      const historyIndex = state.historyIndex + 1;
      return {
        ...state,
        cart,
        historyIndex,
        history
      };
    }

    case "UNDO": {
      let historyIndex = state.historyIndex - 1;
      historyIndex = Math.max(historyIndex, 0);
      return {
        ...state,
        cart: state.history[historyIndex],
        historyIndex
      };
    }

    default: {
      return state;
    }
  }
};
