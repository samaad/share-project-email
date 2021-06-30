import React from "react";
import renderer from "react-test-renderer";
import Panel from "./Panel";
import { shallow } from "enzyme";

test("should render the Panel component", () => {
  const component = renderer.create(<Panel />);
  expect(component).toMatchSnapshot();
});

test("should render header", () => {
  const component = shallow(<Panel />);
  const header = component.find("Header");
  expect(header).toBeTruthy();
});
