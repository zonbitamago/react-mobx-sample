import CounterStore from "./CounterStore";

describe("CounterStore", () => {
  let store;

  beforeEach(() => {
    store = new CounterStore();
  });

  it("plus", () => {
    store.plus();
    expect(store.counter).toBe(1);
  });

  it("minus", () => {
    store.minus();
    expect(store.counter).toBe(-1);
  });
});
