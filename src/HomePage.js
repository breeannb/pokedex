import React, { Component } from 'react'
import request from 'superagent';
import SearchSection from './SearchSection.js';

export default class HomePage extends Component {

    state = {
        pokemoncharacters: [],
        searchQuery: '',
        searchTypeQuery: '', 
        searchAttackQuery: '',
        page: 1,
    }

    // Search Name Bar 
    handleChange = (e) => {
        // console.log('hello world');
        const value = e.target.value;
        // console.log(value); logs out the users value
        this.setState({searchQuery: value})
    }

    handleClick = async () => {
        const { body: { 
                results,
                // perPage,
                // page }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`); 
        
        console.log(results);
        this.setState({pokemoncharacters: results})
    }

    // Type Toggle bar 
    handleTypeChange = (event) => {
      const value = event.target.value; 
      this.setState({ searchTypeQuery: value});
      }

    handleTypeClick = async () => { 
        const { body: { 
            results }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type=${this.state.searchTypeQuery}`); 
    
        this.setState({pokemoncharacters: results})
    }

    // Attack Search Bar 
    handleAttackChange = (e) => {
        // console.log('hello world');
        const value = e.target.value;
        // console.log(value); logs out the users value
        this.setState({searchAttackQuery: value})
    }

    handleAttackClick = async () => {
        const { body: { 
                results }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?attack=${this.state.searchAttackQuery}`); 
        
        console.log(results);
        this.setState({pokemoncharacters: results})
    }

    //Next Button
    nextHandleClick = async () => {
        const { body: { 
                results,
                // perPage,
                // page }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`); 
        
        console.log(results);
        this.setState({pokemoncharacters: results})
    }

    //Prev Button
    prevHandleClick = async () => {
        const { body: { 
                results,
                // perPage,
                // page }
        }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`); 
        
        console.log(results);
        this.setState({pokemoncharacters: results})
    }

    // routeToNextPage = async () => {
        
    //     const nextPageNumber = this.state.page + 1;
    //     this.setState({page: nextPageNumber}) = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`); 
    // }

    

    render() {
        // console.log(this.state.searchNameInquiry) tracking state of user input
        return (
            <div className="list-page">
                <button onClick={this.nextHandleClick}>Next</button>
                <button onClick={this.prevHandleClick}>Prev</button>
                <SearchSection className="searchbar" />
                
            </div>
        )
    }
}
