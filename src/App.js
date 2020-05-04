import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import data from './data.js';
import ListPage from './ListPage.js'
import request from 'superagent';
import PokeTypes from './PokeTypes';
import PokeCard from './PokeCard';


export default class App extends Component {
  
  // initialize state 
  state = {
    searchNameQuery: '', 
    searchTypeOneQuery: '',
    searchTypeTwoQuery: '',
    searchAttackQuery: '',
    data: data.results
  }

  render() {
    // console.log(this.state.data);
      // console.log(this.state.searchQuery); successfully logs out our state changes upon onChange
      // console.log(data);
      // console.log(this.state)
    return (
      <>
        <div>
          <Header />
          <ListPage />
  
        
        
        {/* <PokeTypes /> */}
        
        {/* <PokeCard data={this.state.data} Hello /> */}

        </div>
      </>
    )
  }
}

