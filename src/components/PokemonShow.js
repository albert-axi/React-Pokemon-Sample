const PokemonShow = ({match, pokemonData}) => {

  return (
    <div>
      {console.log("MATCH:",window)}
      <h3>Pokemons Show Component!</h3>
      <h3>{pokemonData[match.params.pokemon].name}</h3>
      <img src={pokemonData[match.params.pokemon].sprites.front_default} />
      <span>Types: {pokemonData[match.params.pokemon].types.map(types => types.type.name).join(", ") }</span>
    </div>
  );
}

export default PokemonShow;