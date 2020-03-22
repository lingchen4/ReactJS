import React, { Component } from "react";
import GroceryItems from "./componets/GroceryItems";
import GroceryCart from "./componets/GroceryCart";
import History from "./componets/history";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>Grocery Cart</h1>
        <History />
        <div className="grocery-container">
          <GroceryItems />
          <GroceryCart />
        </div>
      </div>
    );
  }
}
