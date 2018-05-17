import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import CounterStore from "./store/CounterStore";

const store = new CounterStore();
ReactDOM.render(<App store={store} />, document.getElementById("root"));
