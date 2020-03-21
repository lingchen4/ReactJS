import cretateStore from "redux";

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      cart: []
    };
  }

  switch (action.type) {
    case "ADD_TO_CART": {
      break;
    }
    case "REMOVE_FROM_CART": {
      break;
    }
    default: {
      return state;
    }
  }
};

const store = cretateStore(reducer);
