import { Component } from "react"
import {Link} from 'react-router-dom'
import PokeCard from "./PokeCard"

class Pokedex extends Component {

  renderPokemonCards = () => {
    const {pokemonData, pokemon} = this.props

    return Object.keys(pokemonData).map(pokemon => (
      <Link key={pokemon} to={`/pokemon/${pokemon}`}>
        <PokeCard
          key = {pokemon}
          image = {pokemonData[pokemon].sprites.front_default}
          name = {pokemonData[pokemon].name}
          types = {pokemonData[pokemon].types.map(types=>types.type.name)}
        />
      </Link>
      )
    )
  }

  render() {
    return (
      <div className="pokedex">
        <h1 onClick={this.updatePokemonDataToApp}>Pokedex</h1>
        <div className="pokemon-list">
          {this.renderPokemonCards()}
        </div>
      </div>
    )
  }
}

export default Pokedex