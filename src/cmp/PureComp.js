import React, { Component } from "react";
import HighOrderComp from "./HighOrderComp";

export default class PureComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className="">React Handson 5</h1>
          <p>This is an example of pure component.</p>
          <h4>{this.state.count}</h4>
          <button
            className="btn btn-warning"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increase
          </button>

          <hr />
          <p>Below is the demonstration for Higher order component.</p>
          <HighOrderComp />
        </div>
      </>
    );
  }
}
