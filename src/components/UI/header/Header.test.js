import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import Header from './Header';

import logoImage from '../../../logo.png';

it('renders correctly the Header title', () => {
  const wrapper = render(<Header />);
  expect(wrapper.find('h1').text()).toEqual('Rock-IT NOW');
});

it('renders correctly Header logo', () => {
  const wrapper = render(<Header />);
  expect(wrapper.find('img').prop('src')).toEqual(logoImage);
});
