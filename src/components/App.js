import React, { useState, useContext } from "react"
import { PokemonContext, PokemonProvider } from './PokemonContext.js'
import '../styles/App.css';
import PokeCard from './PokeCard.js'

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
  .then(data => setPokemonData(data.abilities[1].ability.name))
  .then(reformedData => console.log(reformedData));
};


return(

  <div className='App'>
    <div className='Navbar'>
      <nav>
      <ul>
        <li><button>Home</button></li>
        <li><button>About</button></li>
      </ul>
      </nav>
    </div>
    <form className="search-form" onSubmit={handleSubmit}>
      <input
      type='text'
      onChange={handleChange}
      placeholder='enterpokemon'
      />
    </form>
    <h1>{pokemonData}</h1>
    <div className='PokeCards'>
    <PokemonProvider>
    <PokeCard />
    <PokeCard />
    </PokemonProvider>
    </div>
   </div>

)
}

export default App;

