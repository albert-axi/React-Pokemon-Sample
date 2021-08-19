import { useContext } from "react"
import {Link} from 'react-router-dom'
import PokeCard from "./PokeCard"
import { PokemonContext } from '../contexts/PokemonContext'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const Pokedex = ()=>{

  const {pokemonDataState} = useContext(PokemonContext)
  const [pokemonData] = pokemonDataState

  const renderPokemonCards = () => {

    return Object.keys(pokemonData).map(pokemon => (
      <Link key={pokemon} to={`/pokemon/${pokemon}`}>
        <PokeCard
          key = {pokemon}
          image = {pokemonData[pokemon].sprites.front_default}
          name = {pokemonData[pokemon].name}
          types={pokemonData[pokemon].types.map(types => types.type.name)}
          pokeId = {pokemonData[pokemon].id}
        />
      </Link>
      )
    )
  }


    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        <div className="pokemon-list">
          {renderPokemonCards()}
        </div>
      </div>
    )
}

export default Pokedex