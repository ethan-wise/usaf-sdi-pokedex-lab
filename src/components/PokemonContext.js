import React, { createContext, useState } from 'react';

const PokemonContext = createContext(undefined);
const PokemonDispatchContext = createContext(undefined);

function PokemonProvider ({children}) {
    const [pokemonCon, setPokemonCon] = useState({
        poke1: 'charizard'
    });
    return (
        <PokemonContext.Provider value={pokemonCon}>
            <PokemonDispatchContext.Provider value={setPokemonCon}>
            {children}
            </PokemonDispatchContext.Provider>
        </PokemonContext.Provider>
    );
}

export { PokemonProvider, PokemonContext, PokemonDispatchContext };