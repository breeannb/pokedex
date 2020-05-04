import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import data from './data.js';
import ListPage from './ListPage.js'


export default class App extends Component {
  
  // initialize state 
  state = {
    data: data.results
  }

  render() {
    // console.log(this.state.data);
      // console.log(this.state.searchQuery); successfully logs out our state changes upon onChange
      // console.log(data);
      // console.log(this.state)
    return (
      <>
        <div className="whole-page">
          <Header />
          <ListPage />


        </div>
      </>
    )
  }
}

