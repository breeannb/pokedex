import React from 'react'; 
import { shallow } from 'enzyme'; 
import TypeSelection from './TypeSelection.js';

it('renders a searchbar', () => {
  const wrapper = shallow(<TypeSelection />);

  expect(wrapper).toMatchSnapshot();

  
}); 