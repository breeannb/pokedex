import React, { Component } from 'react'

export default class PokeTypes extends Component {
    render() {
        return (
            <>
            <label> Dropdown Filter By Type:</label>
            <div>
                <select> 
                    <option value="alltypes">All Types</option>
                    <option value="bug">Bug</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="ice">Ice</option>
                    <option value="fighting">Fighting</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="flying">Flying</option>
                    <option value="psychic">Psychic</option>
                    <option value="rock">rock</option>
                    <option value="ghost">Ghost</option>
                    <option value="dark">Dark</option>
                    <option value="dragon">Dragon</option>
                    <option value="steel">Steel</option>
                    <option value="fairy">Fairy</option>
                </select> 
            </div>
            </>
        )
    }
}
