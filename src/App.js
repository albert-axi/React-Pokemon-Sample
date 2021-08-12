import { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import Nav from './components/Nav'
import ContactPage from './pages/ContactPage'
import PokemonShow from './components/PokemonShow';

class App extends Component {
  state = {
    pokemon: [],
    pokemonData: {}
  }


  fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()

    return data.results
  }

  fetchPokemonData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    return data
  }

  async componentDidMount() {
    const pokemon = await this.fetchPokemon()
    
    this.setState({
      pokemon
    })

    pokemon.forEach(async poke => {
      const pokeData = await this.fetchPokemonData(poke.url)

      this.setState({
        pokemonData: {
          ...this.state.pokemonData,
          [poke.name]: pokeData
        }
      })
    })
  }

  render() {
    return (
        <BrowserRouter>
          <Nav />
          <Route exact path="/"  component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/pokemon" render={routerProps => {
            const { pokemonData, pokemon } = this.state
            
              return ( Object.keys(pokemonData).length === pokemon.length ?
                <PokemonPage {...routerProps} pokemonData={pokemonData} pokemon={pokemon} /> :
                <h1>No Pokemons to Show</h1>
              )
            }
          } />
        <Route path="/pokemon/:pokemon" render={routerProps => (
          <PokemonShow
            {...routerProps}
            pokemonData={this.state.pokemonData}
          />
        )}/>
        </BrowserRouter>
    )

  }
}

export default App;
