import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeCard extends Component {
    render() {
        return (
            <>
            
                <li className="poke-card">
                    <Link to={`pokedex/pokemon/${this.props.object.pokemon}`}> 
                        <img src={this.props.object.url_image} alt={this.props.object.pokemon} />
                    </Link>
                    <h2>{this.props.object.pokemon}</h2>
                    <p>More Pokedex Stats: {this.props.object.pokedex}</p>
                    <p>Generation: {this.props.object.generation_id}</p>
                    <p>Type_1: {this.props.object.type_1}</p>
                    <p>Type_2: {this.props.object.type_2}</p>
                    <p>Attack: {this.props.object.attack}</p>
                    <p>Defense: {this.props.object.defense}</p>
                    <p>Hp: {this.props.object.hp}</p>
                </li>
    
            </>
        )
    }
}