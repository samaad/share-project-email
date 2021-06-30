// Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";
import { shallow } from "enzyme";

test("should render the header component", () => {
  const component = renderer.create(<Header />);
  expect(component).toMatchSnapshot();
});

test("should render p tag", () => {
  const component = shallow(<Header />);
  const pelment = component.find("p");
  expect(pelment).toBeTruthy();
});
