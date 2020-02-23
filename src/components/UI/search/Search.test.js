import React from 'react';
import { render, shallow } from 'enzyme';

import SearchableList from './Search';

//Small UT to render the App component

describe('Static Rendering <SearchableList /> properly', () => {
  const wrapper = render(<SearchableList />);

  it('it renders the Input', () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('it renders the list wrapper', () => {
    expect(wrapper.find('div.section__list').length).toEqual(1);
  });
});
