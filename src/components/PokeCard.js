import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const PokeCard = ({image, name, types}) => {

  const theme = useContext(ThemeContext)

  return (
    <div className="poke-card" style={{ background: theme.background, color: theme.foreground }} >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <small>Types: {types.join(", ")}</small>
    </div>
  )
}


PokeCard.defaultProps = {
  image: 'http://i.imgur.com/bJw8ndW.png',
  name: "Unknown Pokemon",
  types: ["No type"]

}

export default PokeCard