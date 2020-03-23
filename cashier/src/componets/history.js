import React, { Component } from "react";
import { connect } from "react-redux";
import { undo, redo } from "../reducers/action";

class History extends Component {
  render() {
    return (
      <div className="history-controls">
        <button onClick={this.props.undo}>undo</button>
        <button onClick={this.props.redo}>redo</button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     items: state.cart
//   };
// }

const mapDispatchToProps = dispatch => ({
  undo() {
    dispatch(undo());
  },
  redo() {
    dispatch(redo());
  }
});

export default connect(null, mapDispatchToProps)(History);
