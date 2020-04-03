import React, { useState } from 'react'
import PokemonList from '../pokemon/PokemonList'
import SearchBar from './SearchBar'
import { NavBar } from './NavBar';

const Dashboard = () => {



  const [search, setSearch] = useState("");
  const handleInput = e => {
    setSearch(e);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="searchBar">
        <SearchBar change={e => handleInput(e.target.value)} />
      </div>
      <PokemonList search={search} />
    </div>
    
  );
};

export default Dashboard;