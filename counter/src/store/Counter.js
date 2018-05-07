import { observable } from "mobx";

const Counter = observable.object({
  counter: 0,
  get getCount() {
    return this.counter;
  }
});

export default Counter;
