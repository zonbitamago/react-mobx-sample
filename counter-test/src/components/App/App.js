import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./App.css";
import Counter from "../Counter/Counter";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h2>Hello React World!</h2>
        <Counter store={this.props.store} />
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
