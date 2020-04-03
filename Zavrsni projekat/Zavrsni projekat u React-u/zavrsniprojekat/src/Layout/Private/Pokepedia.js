import React, { useState, useEffect } from 'react';
import PokemonList from './Components/PokemonList';
import axios from 'axios'
import Pagination from './Components/Pagination';
import { Filter } from './Components/Filter';


function Pokepedia() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    const [abPokemon, setAbPokemon]=useState("https://pokeapi.co/api/v2/pokemon/1/")

    useEffect(() => {
        setLoading(true)
        axios.get(currentPageUrl).then(res => {
            setLoading(false)

            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(pnesto => pnesto.name))
        })
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
    }
    if (loading) return "Loading..."


    const handleInput = (e) =>{
        let filterPok=pokemon.filter(el=> el.tags.includes(e.target.value))
        setPokemon(filterPok)
    }

    return (
        <>
            <h1>Pokepedia</h1>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <PokemonList pokemon={pokemon} />
            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
                <Filter handleInput={handleInput}/>

        </>
    )
}



export default Pokepedia