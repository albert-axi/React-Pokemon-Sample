import { Component } from "react";

class PokeCard extends Component {

  logTitle = () => console.log(this.props.title)

  render() {
    return (
      <div className="poke-card">
        <img src={this.props.image} alt={ this.props.name }/>
        <h2>{this.props.name}</h2>
        <small>Types: {this.props.types.join(", ")}</small>
      </div>
    )
  }
}

PokeCard.defaultProps = {
  image: 'http://i.imgur.com/bJw8ndW.png',
  name: "Unknown Pokemon",
  types: ["No type"]

}

export default PokeCard