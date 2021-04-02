import React, { useState } from "react"

const App = () => {
const [pokemon, setPokemon] = useState('pikachu');
const [pokemonData, setPokemonData] = useState([]);

const handleChange = (e) => {
  setPokemon(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  getPokemon();
}

const getPokemon = async () => {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(response => response.json())
  .then(data => setPokemonData(data));
};

return(
  <div className='App'>
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      onChange={handleChange}
      placeholder='enterpokemon'
      />
    </form>
  </div>
)
}