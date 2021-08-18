import PokeCard from "./PokeCard";

const PokemonShow = ({ match: { params: { pokemon } }, pokemonData }) => {

  return (
    <div className="pokemon-list">
      {/* {console.log("MATCH:",window)}
      <h3>Pokemons Show Component!</h3>
      <h3>{pokemonData[match.params.pokemon].name}</h3>
      <img src={pokemonData[match.params.pokemon].sprites.front_default} />
      <span>Types: {pokemonData[match.params.pokemon].types.map(types => types.type.name).join(", ")}</span> */}
      <PokeCard
          key = {pokemon}
          image = {pokemonData[pokemon].sprites.front_default}
          name = {pokemonData[pokemon].name}
          types = {pokemonData[pokemon].types.map(types=>types.type.name)}
        />
    </div>
  );
}

export default PokemonShow;