import React, { Component } from "react";
import GroceryItems from "./GroceryItems";
import GroceryCart from "./GroceryCart";
import { Provider } from "react-redux";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(item) {
    const cart = [...this.state.cart, item];
    this.setState({ cart });
  }

  removeFromCart(index) {
    const cart = [...this.state.cart];
    cart.splice(index, 1);
    this.setState({ cart });
  }

  render() {
    return (
      <div id="app-container">
        <Provider store={store}>
          <h1>Grocery Cart</h1>
          <div className="grocery-container">
            <GroceryItems addToCart={this.addToCart} />
            <GroceryCart
              items={this.state.cart}
              removeFromCart={this.removeFromCart}
            />
          </div>
        </Provider>
      </div>
    );
  }
}
