import React, { Component } from 'react'
import TypeSelection from './TypeSelection.js';
import PokeCard from './PokeCard.js';
import request from 'superagent';


export default class SearchSection extends Component {
    
    state = {
        pokemoncharacters: [],
        searchQuery: '',
        searchTypeQuery: '', 
        searchAttackQuery: '',
        searchDefenseQuery: '',
        searchHpQuery: ''
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
                results }
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

    // Defense Search Bar 
    handleDefenseChange = (e) => {
        // console.log('hello world');
        const value = e.target.value;
        // console.log(value); logs out the users value
        this.setState({searchDefenseQuery: value})
    }

    handleDefenseClick = async () => {
        const { body: { 
                results }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?defense=${this.state.searchDefenseQuery}`); 
        
        console.log(results);
        this.setState({pokemoncharacters: results})
    }

    // Hp Search Bar 
    handleHpChange = (e) => {
        // console.log('hello world');
        const value = e.target.value;
        // console.log(value); logs out the users value
        this.setState({searchHpQuery: value})
    }

    handleHpClick = async () => {
        const { body: { 
                results }
        } = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?hp=${this.state.searchHpQuery}`); 
        
        console.log(results);
        this.setState({pokemoncharacters: results})
    }

    render() {
        return (
        
            <div>
                <div className="name-search-bar">
                <input  onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
                </div>

                <div className="type-selection">
                <TypeSelection myTypeCallBackHandleChange={this.handleTypeChange} />
                <button onClick={this.handleTypeClick}>Search</button>
                </div>

                <div className="attack-selection">
                <input onChange={this.handleAttackChange} type="number" min="1" max="190"/><button onClick={this.handleAttackClick}>Attack Search</button>  
                </div>

                <div className="attack-selection">
                <input onChange={this.handleDefenseChange} type="number" min="1" max="190"/><button onClick={this.handleDefenseClick}>Defense Search</button>  
                </div>

                <div className="attack-selection">
                <input onChange={this.handleHpChange} type="number" min="1" max="190"/><button onClick={this.handleHpClick}>HP Search</button>  
                </div>

                <ul className="gallery-window">
                {
                    this.state.pokemoncharacters.map((pokemonmonster) => {
                        return <div>
                                <PokeCard object={pokemonmonster}/>
                        </div>

                    })
                }
                </ul>
            </div>
        )
    }
}
