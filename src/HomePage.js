import React, { Component } from 'react'
// import request from 'superagent';
import SearchSection from './SearchSection.js';

export default class HomePage extends Component {

    state = {
        pokemoncharacters: [],
        searchQuery: '',
        searchTypeQuery: '', 
        searchAttackQuery: '',
    }


    render() {
        console.log('||', this.state.pageInfo);
        return (
            <div className="list-page">
                
                <SearchSection className="searchbar" />
                
            </div>
        )
    }
}
