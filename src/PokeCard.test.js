import React from 'react'; 
import { shallow } from 'enzyme'; 
import PokeCard from './PokeCard.js';

it('renders a pokecard', () => {
  const wrapper = shallow(<PokeCard object={{ pokemon: 'some pokemon'}}/>);

  expect(wrapper).toMatchSnapshot();

}); 