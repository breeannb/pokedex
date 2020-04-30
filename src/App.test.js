import React from 'react';
import App from './App';
import { shallow } from 'enzyme'; 

test('renders learn react link', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MyComponent />)
   expect(wrapper).toMatchSnapshot();
});
});
