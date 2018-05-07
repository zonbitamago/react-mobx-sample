import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ShowCount.css";
import { observer } from "mobx-react";

const ShowCount = observer(
  class ShowCount extends Component {
    render() {
      return (
        <div className="ShowCount">counter:{this.props.store.counter}</div>
      );
    }
  }
);

ShowCount.propTypes = { store: PropTypes.object };

ShowCount.defaultProps = {};

export default ShowCount;
