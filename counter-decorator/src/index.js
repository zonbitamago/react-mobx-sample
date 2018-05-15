import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counter from "./store/Counter";
import registerServiceWorker from "./registerServiceWorker";
// import { observable } from "mobx";

const store = new Counter();
// const store = observable({ counter: 0 });

ReactDOM.render(<App store={store} />, document.getElementById("root"));

setInterval(() => {
  store.counter += 1;
}, 1000);

registerServiceWorker();
