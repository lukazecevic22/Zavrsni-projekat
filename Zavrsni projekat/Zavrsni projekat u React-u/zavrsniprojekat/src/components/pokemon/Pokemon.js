import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class Pokemon extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        stats: {
            hp: "",
            attack: "",
            defense: ""
        }
    }
    
    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`

        const pokemonRes = await axios.get(pokemonUrl)
        const name = pokemonRes.data.name;
        // this.setState({name:name})
        const imageUrl = pokemonRes.data.sprites.front_default

        let { hp, attack, defense } = '';

        pokemonRes.data.stats.map(stat => {
            switch (stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat']
                    break;
                case 'attack':
                    attack = stat['base_stat']
                    break;
                case 'defense':
                    defense = stat['base_stat']
                    break;
            }
        })
        const types = pokemonRes.data.types.map(type => type.type.name)
        const abilities = pokemonRes.data.abilities.map(ability => {
            return ability.ability.name
        })
        await axios.get(pokemonSpeciesUrl).then(res => {
            let description = '';
            this.setState({
                description
            })
        })
        this.setState({
            imageUrl,
            pokemonIndex,
            name,
            types,
            abilities,
            types,
            stats: {
                hp,
                attack,
                defense
            }
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card123">
                    <div className="row">
                        <h5> {this.state.pokemonIndex} </h5>
                    </div>
                    <div className="imageUrl">
                        <img src={this.state.imageUrl} />
                    </div>
                    <div className="row">
                        <h4> {this.state.name} </h4>
                    </div>
                    <div className="row1">
                        <div>HP{'  '}{this.state.stats.hp}{'  '}%</div>
                        <div>Attack{'  '}{this.state.stats.attack}</div>
                        <div>Defense{'  '}{this.state.stats.defense}</div>
                    </div>
                    <div>
                        <p>{this.state.description}</p>
                    </div>
                    <div className="row">
                        <div>
                            <h5> Types{' '} {this.state.types} </h5>
                        </div>
                    </div>
                    <div className="row">
                        <h5> Abilities{''} {this.state.abilities} </h5>
                    </div>
                </div>
                <Link to={"/dashboard"}>
                    <button className="btn btn-primary btn-block">Return to pokepedia</button>
                </Link>
            </div>
        )
    }
}
