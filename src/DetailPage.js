import React, { Component } from 'react'
import request from 'superagent';
import PokeCard from './PokeCard'

export default class DetailPage extends Component {
    
    state = {
        pokemoncharacter: {}
    }
    
    async componentDidMount() {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.id}`); 
        this.setState({pokemoncharacter: fetchedData.body.results[0]})
    }


    render() {
        return (
            <ul>
                <PokeCard object={this.state.pokemoncharacter} />
            </ul>
        )
    }
}
