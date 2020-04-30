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
    searchQuery: '', 
    data: data, 
  }

   
  handleChange = (event) => {
      // console.log('hello world'); successfully logs out
    //get value of the input 
    const value = event.target.value; 
    // on change, we can now get the value
      // console.log('hello world!,', value); successfully logs out
    // set state of query to value
    this.setState({ searchQuery: value});
    
  }

  handleClick = async () => { 
    // console.log('hello world', this.state.searchQuery);
    const fetchData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`); 

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
          
          {/* make a search bar event handler*/}
          <input onChange={this.handleChange} />

          {/* button */}
          <button onClick={this.handleClick}>Search</button>

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

