//simple app, initializes context, initializes data, initializes state
import React, { useState, useEffect } from "react";
import fetch from "../utility/AsyncFetch";
import { getPokeListUrl } from "../utility/Links&Data";
import PokemonContext from "../utility/PokeContext.js";
import Main from "./main/Main";
import "../styles/App.css";

function App() {
  const [pokeData, setPokeData] = useState([{}]);

  useEffect(() => {
    fetch(getPokeListUrl())
      .then((data) => data.results)
      .then((results) => setPokeData(results));
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
