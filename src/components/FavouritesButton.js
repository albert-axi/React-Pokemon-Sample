import { useContext } from "react"
import { FavouritesContext } from "../contexts/FavouritesContext"
import { PokemonContext } from "../contexts/PokemonContext"


const FavouritesButton = ({name}) => {
  const [favouriteState, dispatch] = useContext(FavouritesContext)
  const { pokemonDataState } = useContext(PokemonContext);
  const [pokemonData] = pokemonDataState // destructure pokemonDataState

  const findPokemon = () => favouriteState.favourites.find(poke => poke.name === name) // find the Pokemon in the favourites collection

  const getPokemon = () => {
    return pokemonData[name] //get the specific pokemon data
  }

  const handleClick = event => {
    if (findPokemon()) {
      dispatch({
        type: 'REMOVE_POKEMON',
        payload: getPokemon()
      })
    }
    else {
      dispatch({
        type: 'ADD_POKEMON',
        payload: getPokemon()
      })
    }

  }

  return (
    <button onClick={handleClick}>{ findPokemon() ? " Remove to Fav" : "Add to Fav" }</button>
  )
}

export default FavouritesButton