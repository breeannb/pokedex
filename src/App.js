import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import request from 'superagent';
import PokeTypes from './PokeTypes';
import PokeCard from './PokeCard';

const data = [
  {
      "_id": "5cef3501ef6005a77cd4fd16",
      "pokemon": "venusaur",
      "id": 3,
      "species_id": 3,
      "type_1": "grass",
      "type_2": "poison",
      "attack": 82,
      "defense": 83,
      "color_1": "#78C850",
      "color_2": "#A040A0",
      "color_f": "#81A763",
      "egg_group_1": "monster",
      "egg_group_2": "plant",
      "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      "pokedex": "http://www.pokemon.com/us/pokedex/venusaur"
    },
    {
      "_id": "5cef3501ef6005a77cd4fd17",
      "pokemon": "bulbasaur",
      "id": 1,
      "species_id": 1,
      "type_1": "grass",
      "type_2": "poison",
      "attack": 49,
      "defense": 49,
      "color_1": "#78C850",
      "color_2": "#A040A0",
      "color_f": "#81A763",
      "egg_group_1": "monster",
      "egg_group_2": "plant",
      "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      "pokedex": "http://www.pokemon.com/us/pokedex/bulbasaur"
    },
    {
      "_id": "5cef3501ef6005a77cd4fd18",
      "pokemon": "venusaur-mega",
      "id": 4,
      "species_id": 3,
      "type_1": "grass",
      "type_2": "poison",
      "attack": 100,
      "defense": 123,
      "color_1": "#78C850",
      "color_2": "#A040A0",
      "color_f": "#81A763",
      "egg_group_1": "monster",
      "egg_group_2": "plant",
      "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png",
      "pokedex": "http://www.pokemon.com/us/pokedex/venusaur"
    }
]

export default class App extends Component {
  
  // initialize state 
  state = {
    searchNameQuery: '', 
    searchTypeOneQuery: '',
    searchTypeTwoQuery: '',
    searchAttackQuery: '',
    data: data, 
  }

  handleNameChange = (event) => {
      // console.log('hello world'); successfully logs out
    //get value of the input 
    const value = event.target.value; 
    // on change, we can now get the value
      // console.log('hello world!,', value); successfully logs out
    // set state of query to value
    this.setState({ searchNameQuery: value});
    
  }

  handleTypeChange = (event) => {
    // console.log('hello world'); successfully logs out
  //get value of the input 
  const value = event.target.value; 
  // on change, we can now get the value
    // console.log('hello world!,', value); successfully logs out
  // set state of query to value
  this.setState({ searchTypeQuery: value});
  
  }

  handleAttackChange = (event) => {
      // console.log('hello world'); successfully logs out
    //get value of the input 
    const value = event.target.value; 
    // on change, we can now get the value
      // console.log('hello world!,', value); successfully logs out
    // set state of query to value
    this.setState({ searchAttackQuery: value});
    
  }

  handleNameClick = async () => { 
    // console.log('hello world', this.state.searchQuery);
    const fetchData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchNameQuery}`); 

    console.log(fetchData.body.results);
    this.setState({ data: fetchData.body.results })
  }

  handleTypeOneClick = async () => { 
    // console.log('hello world', this.state.searchQuery);
    const fetchData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type_1=${this.state.searchTypeQuery}`); 

    console.log(fetchData.body.results);
    this.setState({ data: fetchData.body.results })
  }

  handleTypeTwoClick = async () => { 
    // console.log('hello world', this.state.searchQuery);
    const fetchData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type_2=${this.state.searchTypeQuery}`); 

    console.log(fetchData.body.results);
    this.setState({ data: fetchData.body.results })
  }

  handleAttackClick = async () => { 
    // console.log('hello world', this.state.searchQuery);
    const fetchData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?attack=${this.state.searchAttackQuery}`); 

    console.log(fetchData.body.results);
    this.setState({ data: fetchData.body.results })
  }



  render() {
      // console.log(this.state.searchQuery); successfully logs out our state changes upon onChange
      // console.log(data);
      // console.log(this.state)
    return (
      <>

        <Header />
        <div className="App">
          
          {/* search bar by name  */}
          {/* make a search bar event handler*/}
          <input onChange={this.handleNameChange} />
          <button onClick={this.handleNameClick}>Name Search</button>

          {/* search bar by types: there can be 2 */}
          {/* make a search bar event handler*/}
          <input onChange={this.handleTypeChange} />
          <button onClick={this.handleTypeOneClick}>Type 1 Search</button>

          {/* search bar by types: there can be 2 */}
          {/* make a search bar event handler*/}
          <input onChange={this.handleTypeChange} />
          <button onClick={this.handleTypeTwoClick}>Type 2 Search</button>

          {/* search by attack */}
          {/* make a search bar event handler*/}
          <input onChange={this.handleAttackChange} type="number" min="1" max="190"/>
          <button onClick={this.handleAttackClick}>Attack Search</button>


          {/* Map over the data */}
          {
            this.state.data.map(pokemonobj => {
            return <>
            <h1>{pokemonobj.pokemon}</h1> 
            <img src={pokemonobj.url_image} alt=""/>
            <p>{pokemonobj.type_1}</p>
            <p>{pokemonobj.type_2}</p>
            <p>{pokemonobj.attack}</p>
            </>
            })
          }
        </div>
        
        {/* <PokeTypes /> */}
        
        {/* <PokeCard data={this.state.data}  /> */}
      </>
    )
  }
}

