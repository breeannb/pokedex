import React from 'react';
import { shallow } from 'enzyme'; 
import Header from './Header';
import Footer from './Footer';
import SearchSection from './SearchSection';

// import { waitForElementToBeRemoved } from '@testing-library/react';

test('render a header', () => {
    const header = shallow(<Header />)
  //  expect(header).toMatchSnapshot();
  expect(header.find('h1').length).toBe(1);
});

test('render a footer', () => {
  const footer = shallow(<Footer />)
//  expect(header).toMatchSnapshot();
expect(footer.find('p').length).toBe(1);
});

test('render a pokecard', () => {
  const pokecard = shallow(<SearchSection />)
//  expect(header).toMatchSnapshot();
expect(pokecard.find('button').length).toBe(7);
});
