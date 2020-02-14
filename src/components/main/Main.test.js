import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import Main from './Main';

import logoImage from '../../logo.png';

//Small UT to render the App component
it('renders Main  without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Main children correctly ', () => {
  const wrapper = render(<Main />);
  expect(wrapper.children()).toHaveLength(2);
});

it('renders correctly the main page title', () => {
  const wrapper = render(<Main />);
  expect(wrapper.find('h1').text()).toEqual('Rock-IT NOW');
});

it('renders correctly the main page logo', () => {
  const wrapper = render(<Main />);
  expect(expect(wrapper.find('img').prop('src')).toEqual(logoImage));
});

it('renders correctly the main div children', () => {
  const wrapper = render(<Main />);
  expect(wrapper.find('div.main').children()).toHaveLength(2);
});
