import React, { Component } from 'react';
import './App.css';



export default class App extends Component {
  
  // initialize state 
  state = {
    searchQuery: null, 
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

  render() {
      // console.log(this.state.searchQuery); successfully logs out our state changes upon onChange
    return (
      <div className="App">
        
        {/* make a search bar event handler*/}
        <input onChange={this.handleChange} />

    </div>
    )
  }
}

