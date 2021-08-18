import { useContext } from 'react'
import Pokedex from '../components/Pokedex'
import { PokemonContext } from '../contexts/PokemonContext'

const PokemonPage = (props)=>{

  const {pokemonState, pokemonDataState} = useContext(PokemonContext);

 
    return (
      <>
        <h1 style={{display: 'grid', justifyContent: 'center'}}>Pokemon Page</h1>
        <Pokedex />
      </>
    )
  
}

export default PokemonPage