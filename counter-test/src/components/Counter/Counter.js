import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.css";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Counter">
        <p>Counter:{this.props.store.counter}</p>
        <button id="button" onClick={this.props.store.plus}>
          Add
        </button>
        <button id="minus" onClick={this.props.store.minus}>
          minus
        </button>
      </div>
    );
  }
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;
