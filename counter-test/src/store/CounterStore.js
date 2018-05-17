import { observable, computed, action } from "mobx";

class CounterStore {
  @observable counter = 0;

  @action.bound
  plus() {
    this.counter++;
  }

  @action.bound
  minus() {
    this.counter--;
  }
}

export default CounterStore;
