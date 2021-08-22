import { createContext, useReducer } from 'react'
import { db } from '../firebase/firebase'

export const FavouritesContext = createContext(null) // created a new context

export const FavouritesContextProvider = props => {
  const [favouriteState, dispatch] = useReducer(reducer, { favourites: [] });

  return (
    <FavouritesContext.Provider value={[favouriteState, dispatch]}>
      {props.children}
    </FavouritesContext.Provider>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      //check if pokemon is already in the favourites
      if (state.favourites.find(pokemon => pokemon.id === action.payload.pokemon.id)) {
        return state
      }

      return {
        favourites: [
          ...state.favourites, // copy the current favourites collection
          action.payload.pokemon// add new pokemon
        ]
      };
    case 'REMOVE_POKEMON':
      return {
        favourites: state.favourites.filter(pokemon => pokemon.id !== action.payload.pokemon.id) // filter only the pokemons that we want to keep
      };
    case 'CLEAR_POKEMON':
      console.log("RESET FAVOURITE POKEMON CONTEXT")
      return {
        favourites: []
      }
      
    default:
      return state
  }
}