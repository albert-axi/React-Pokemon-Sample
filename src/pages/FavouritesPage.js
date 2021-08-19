import { useContext } from "react"
import { FavouritesContext } from "../contexts/FavouritesContext"
import PokeCard from "../components/PokeCard"

const FavouritesPage = () => {
  const [favouriteState] = useContext(FavouritesContext)
  
  const renderFavourites = () => favouriteState.favourites.map(pokemon => (<PokeCard
    key = {pokemon.id}
    image = {pokemon.sprites.front_default}
    name = {pokemon.name}
    types={pokemon.types.map(types => types.type.name)}
    pokeId = {pokemon.id}
  />))

  return (
    <div className="pokedex">
        <h1>Favourites</h1>
        <div className="pokemon-list">
          {renderFavourites()}
        </div>
      </div>
  )
}

export default FavouritesPage