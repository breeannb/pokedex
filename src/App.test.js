import React from 'react';
import { shallow } from 'enzyme'; 
import Header from './Header';
// import { waitForElementToBeRemoved } from '@testing-library/react';

test('renders learn react link', () => {
    const header = shallow(<Header />)
  //  expect(header).toMatchSnapshot();
  expect(header.find('h1').length).toBe(1);
});
