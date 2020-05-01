import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import request from 'superagent';

const data = [
  {
    character: 'some character 1', 
    quote: 'some quote 1',
    img: 'some img 1'
  }, 
  {
    character: 'some character 2', 
    quote: 'some quote 2',
    img: 'some img 2'
  }, 
  {
    character: 'some character 3', 
    quote: 'some quote 3',
    img: 'some img 3'
  }
]

export default class App extends Component {
  
  // initialize state 
  state = {
    searchNameQuery: '', 
    searchTypeOneQuery: '',
    searchTypeTwoQuery: '',
    searchAttackQuery: '',
    data: data, //make this an empty array? []
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
          <button onClick={this.handleTypeOneClick}>Type Search</button>

          {/* search bar by types: there can be 2 */}
          {/* make a search bar event handler*/}
          <input onChange={this.handleTypeChange} />
          <button onClick={this.handleTypeTwoClick}>Type 2 Search</button>

          {/* search by attack */}
          {/* make a search bar event handler*/}
          <input onChange={this.handleAttackChange} type="number" min="1" max="100"/>
          <button onClick={this.handleAttackClick}>Attack Search</button>


          {/* Map over the data */}
          {
            this.state.data.map(quote => {
              return <h1>{quote.pokemon}</h1>
            })
          }
        </div>
      </>
    )
  }
}

