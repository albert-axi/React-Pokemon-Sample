import { Component } from 'react'
import Pokedex from '../components/Pokedex'

class PokemonPage extends Component {

  render() {
    return (
      <>
        <h1 style={{display: 'grid', justifyContent: 'center'}}>Pokemon Page</h1>
        <Pokedex
          {...this.props}
          pokemonData={this.props.pokemonData}
          pokemon={this.props.pokemon}
        />
        {console.log("PROPS: ", this.props)}
      </>
    )
  }
}

export default PokemonPage