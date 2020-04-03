import React, { Component } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'



export default class PokemonList extends Component {
    state = {
      url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50",
      pokemon: null
    };
    async componentDidMount() {
      const res = await axios.get(this.state.url);
      this.setState({ pokemon: res.data["results"] });
    }
    filter() {
      if (this.state.pokemon && this.props.search) {
        return this.state.pokemon.filter(p => p.name.includes(this.props.search));
      }
      return this.state.pokemon;
    }
    render() {
      return (
        <div>
          {this.state.pokemon ? (
           <div className="row">
              {this.filter().map(pokemon => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </div>
          ) : (
            <h1>Loading Pokemon</h1>
          )}
        </div>
      );
    }
  }
