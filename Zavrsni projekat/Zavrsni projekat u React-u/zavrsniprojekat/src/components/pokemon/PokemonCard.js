import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    };
    componentDidMount() {
        // const name = this.props.name;
        // const url = this.props.url;
        const { name, url } = this.props;

        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name: name,
            imageUrl: imageUrl,
            pokemonIndex: pokemonIndex
        })
    }
    render() {
        return (
            <div className="card">
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                    <div className="PoCard">
                        <h5 className="cardIndex">{this.state.pokemonIndex}</h5>
                    </div>
                    <div>
                        <img className="card-image" src={this.state.imageUrl}>
                        </img>
                    </div>
                    <div className="PoCard1">
                        <h6 className="cardName">{this.state.name}</h6>
                    </div>
                </Link>
            </div>
        )
    }
}
