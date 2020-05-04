import React, { Component } from 'react'
import request from 'superagent';

export default class DetailPage extends Component {
    
    state = {
        pokemoncharacter: {}
    }
    
    async componentDidMount() {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.id}`); 
        console.log('hello', fetchedData);
        this.setState({pokemoncharacter: fetchedData.body.results})
    }


    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}
