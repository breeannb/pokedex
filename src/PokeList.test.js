import React from 'react'; 
import { shallow } from 'enzyme'; 
import ListSection from './ListSection';

it('renders a searchbar', () => {
  const wrapper = shallow(<ListSection />);

  expect(wrapper).toMatchSnapshot();

  
}); 