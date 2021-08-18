import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import Nav from './components/Nav'
import ContactPage from './pages/ContactPage'
import PokemonShow from './components/PokemonShow'
import { ThemeContext, themes } from './contexts/ThemeContext'
import { PokemonContext } from './contexts/PokemonContext'
import SignInScreen from './components/SignInScreen';
import './firebaseui-styling.global.css'; // Import globally.


const App = () => {

  const { pokemonState, pokemonDataState } = useContext(PokemonContext);

  const [pokemon, setPokemon] = pokemonState
  const [pokemonData, setPokemonData] = pokemonDataState


  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()

    return data.results
  }

  const fetchPokemonData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    return data
  }

  const effectCallbackFn = async () => {
    const pokemon = await fetchPokemon()
    setPokemon(pokemon)


    pokemon.forEach(async poke => {
      const pokeData = await fetchPokemonData(poke.url)

      setPokemonData(prevState => {
        return {
          ...prevState,
          [poke.name]: pokeData
        }
      })
    })
  }

  useEffect(effectCallbackFn, [])


  return (
    <ThemeContext.Provider value={themes.light}>
      <BrowserRouter>
        <Nav />
        <SignInScreen />
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/pokemon" render={routerProps => {

          return (Object.keys(pokemonData).length === pokemon.length ?
            <PokemonPage {...routerProps} /> :
            <h1>No Pokemons to Show</h1>
          )
        }
        } />
        <Route path="/pokemon/:pokemon" render={routerProps => (
          <PokemonShow
            {...routerProps}
            pokemonData={pokemonData}
          />
        )} />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App;
