import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="m-3">
        <span className={this.getClasses()}>{this.props.counter.value}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
          style={{ width: 40 }}
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
          style={{ width: 40 }}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.props.counter)}
        >
          Delete
        </button>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "text-bg-warning" : "text-bg-primary";
    return classes;
  }
}

export default Counter;
