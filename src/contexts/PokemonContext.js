import {createContext, useState} from 'react'

export const PokemonContext = createContext(null) // created a new context

export const PokemonContextProvider = props => {
  // const [pokemon, setPokemon] = useState({
  //   pokemon: [],
  //   pokemonData: null
  // }); // [statefulObject, setterMethod]

  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);

  const state = {
        pokemonState: [pokemon, setPokemon], 
        pokemonDataState: [pokemonData, setPokemonData]
      }

  return (
    <PokemonContext.Provider value={state}>
      {props.children}
    </PokemonContext.Provider>
  )
}
