import React, { Component } from 'react'

export default class PokeCard extends Component {
    render() {
        return (
            <ul>
                <li className="poke-card">
                    <h2>{this.props.object.pokemon}</h2>
                    <img src={this.props.object.url_image} alt={this.props.object.pokemon} />
                    <p>Type_1: {this.props.object.type_1}</p>
                    <p>Type_2: {this.props.object.type_2}</p>
                </li>
            </ul>
        )
    }
}
