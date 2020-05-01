import React, { Component } from 'react'

export default class PokeCard extends Component {
    render() {
        return (
            <ul>
                <li>
                    <h2>{this.props.data.pokemon}</h2>
                    <img src={this.props.data.url_image} alt={this.props.data.pokemon} />
                    <p>Type_1: {this.props.data.type_1}</p>
                    <p>Type_2: {this.props.data.type_2}</p>
                </li>
            </ul>
        )
    }
}
