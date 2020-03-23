import { GROCERY_ITEMS } from "./data";
import { REDO, UNDO, ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

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
    case ADD_TO_CART: {
      const cart = [...state.cart, action.item];
      //copy all of the history
      const history = [...state.history];
      //chop off all recored future history that happended after this
      //point in time. performing actions in the past destorys all of
      //thie previous future. you cant go back to the future
      history.splice(state.historyIndex + 1, state.history.length);
      //add the current cart state to the end of history array
      history.push(cart);
      //mark our historyindex as being the last thing in the array

      const historyIndex = history.length - 1;
      return {
        ...state,
        cart,
        historyIndex,
        history
      };
    }
    case REMOVE_FROM_CART: {
      const cart = [...state.cart];
      cart.splice(action.index, 1);

      //copy all of the history
      const history = [...state.history];
      //chop off all recored future history that happended after this
      //point in time. performing actions in the past destorys all of
      //thie previous future. you cant go back to the future
      history.splice(state.historyIndex + 1, state.history.length);
      //add the current cart state to the end of history array
      history.push(cart);

      //mark our historyindex as being the last thing in the array
      const historyIndex = history.length - 1;
      return {
        ...state,
        cart,
        historyIndex,
        history
      };
    }

    case UNDO: {
      let historyIndex = state.historyIndex - 1;
      historyIndex = Math.max(historyIndex, 0);
      return {
        ...state,
        cart: state.history[historyIndex],
        historyIndex
      };
    }

    case REDO: {
      let historyIndex = state.historyIndex + 1;
      historyIndex = Math.min(historyIndex, state.history.length - 1);
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
