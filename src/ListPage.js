import React, { Component } from 'react'
import data from './data.js';
import PokeCard from './PokeCard.js';

export default class ListPage extends Component {

    state = {
        data: data.results
    }


    render() {
        return (
            <div className="list-page">
                {
                    this.state.data.map((pokemonmonster) => {
                        return <div>
                            <PokeCard object={pokemonmonster}/>
                        </div>

                    })
                }
            </div>
        )
    }
}
