import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export default class App extends Component {
  
  handleChange = () => {
    console.log('hello world');
  }

  render() {
    return (
      <div className="App">
        
        {/* make a search bar event handler*/}
        <input onChange={this.handleChange} />

    </div>
    )
  }
}

