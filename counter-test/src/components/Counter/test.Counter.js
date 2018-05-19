import React from "react";
import { shallow } from "enzyme";

import Counter from "./Counter";

describe("Counter", () => {
  let component, props, plus, minus;

  beforeEach(() => {
    plus = jest.fn();
    minus = jest.fn();
    props = { store: { counter: 0, plus: plus, minus: minus } };
    component = shallow(<Counter {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });

  it("plus click", () => {
    component.find("#plus").simulate("click");
    expect(plus.mock.calls.length).toBe(1);
    expect(minus.mock.calls.length).toBe(0);
  });

  it("minus click", () => {
    component.find("#minus").simulate("click");
    expect(plus.mock.calls.length).toBe(0);
    expect(minus.mock.calls.length).toBe(1);
  });
});
