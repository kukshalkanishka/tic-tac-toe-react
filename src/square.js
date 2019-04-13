import React, { Component } from "react";
import "./App.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
  }

  render() {
    return (
      <div
        className="square"
        onClick={this.props.insertSymbol.bind(null, this.id)}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Square;
