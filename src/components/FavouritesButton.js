import { useContext } from "react"
import { FavouritesContext } from "../contexts/FavouritesContext"
import { PokemonContext } from "../contexts/PokemonContext"
import { UserContext } from "../contexts/UserContext"
import { db } from '../firebase/firebase'

const FavouritesButton = ({ name }) => {
  const [user, setUser] = useContext(UserContext)
  const [favouriteState, dispatch] = useContext(FavouritesContext)
  const { pokemonDataState } = useContext(PokemonContext);
  const [pokemonData] = pokemonDataState // destructure pokemonDataState

  const findPokemon = () => favouriteState.favourites.find(poke => poke.name === name) // find the Pokemon in the favourites collection

  const getPokemon = () => {
    return pokemonData[name] //get the specific pokemon data
  }

  const handleClick = async event => {

    if (findPokemon()) {
      const deletePokemon = favouriteState.favourites.find(pokemon => pokemon.id === getPokemon().id)

      db.collection("users")
        .doc(user.uid)
        .collection("pokemon")
        .doc(deletePokemon.uid)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => console.error("Error removing document: ", error));
      
      dispatch({
        type: 'REMOVE_POKEMON',
        payload: {
          pokemon: getPokemon()
        }
      })
    }
    else {

      const pokemonRef = await db.collection("users")
          .doc(user.uid)
          .collection("pokemon")
          .add(getPokemon())

          console.log("NEW POKEMON", pokemonRef.id)
      dispatch({
        type: 'ADD_POKEMON',
        payload: {
          pokemon: {uid: pokemonRef.id, ...getPokemon()}
        }
      })
    }

  }

  return (
    <button onClick={handleClick}>{ findPokemon() ? " Remove to Fav" : "Add to Fav" }</button>
  )
}

export default FavouritesButton