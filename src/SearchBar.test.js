import React from 'react'; 
import { shallow } from 'enzyme'; 
import SearchBar from './SearchBar.js';

it('renders a searchbar', () => {
  const wrapper = shallow(<SearchBar />);

  expect(wrapper).toMatchSnapshot();

  
}); 