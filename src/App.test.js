import React from 'react';
import { shallow } from 'enzyme'; 
import Header from './Header';

test('renders learn react link', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />)
   expect(wrapper).toMatchSnapshot();
});
});
