// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { mountToJson, shallowToJson, renderToJson } from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// Enzyme methods save to global
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.mountToJson = mountToJson;
global.shallowToJson = shallowToJson;
global.renderToJson = renderToJson;
global.MEDIA_URL = '';
global.__BROWSER__ = true;
global.__APP_MOUNT__ = true;
global.__INITIAL_STATE__ = { get resources() {
  return global.resources;
}};