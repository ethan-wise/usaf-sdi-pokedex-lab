//simple app, initializes context, initializes data, initializes state
import React, { useState, useEffect } from "react";
import PokeInitFetch from "../utility/PokeInitFetch";
import PokemonContext from "../utility/PokeContext.js";
import Main from "./main/Main";
import "../styles/App.css";

function App() {
  const [pokeData, setPokeData] = useState([{}]);

  useEffect(() => {
    PokeInitFetch().then((data) => setPokeData(data));
  }, []);

  return (
    <PokemonContext.Provider value={{ pokeData, setPokeData }}>
      <div className="app">
        <Main />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
