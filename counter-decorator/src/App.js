import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowCount from "./components/ShowCount/ShowCount";
const App = class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <ShowCount store={this.props.store} />
      </div>
    );
  }
};

export default App;
