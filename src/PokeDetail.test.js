import React from 'react'; 
import { shallow } from 'enzyme'; 
import PokeDetail from './PokeDetail.js';

it('renders a pokedetail', () => {
  const wrapper = shallow(<PokeDetail object={{ pokemon: 'some pokemon'}}/>);

  expect(wrapper).toMatchSnapshot();

}); 