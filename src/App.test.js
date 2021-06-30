import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

test("should render the App component", () => {
  const component = renderer.create(<App />);
  expect(component).toMatchSnapshot();
});

test("should render pannel", () => {
  const component = shallow(<App />);
  expect(component.text()).toEqual("<Panel />");
});
