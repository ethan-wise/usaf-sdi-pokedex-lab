import React, {useState} from 'react';
//import '../styles/PokeCard.css'
import { PokemonContext } from './PokemonContext';
import styled, {css} from "styled-components";

const PokeCardStyle = styled.div`
  height: 300px;
  width: 150px;
  background-color: grey;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: solid 2px black;
`;




const PokeCard = () => {
    const pokeName = 'pikachu';
    const pokeType = 'electric';
    const abilities = ['static', 'lightning-rod'];
    const pokeId = 25;  
    const pokemonCon = React.useContext(PokemonContext);
    return (
        <PokeCardStyle>
        <div className='PokeCard'>
            <a href='https://placeholder.com'><img src='https://via.placeholder.com/150'></img></a>
            
           <div className="pokeman-name">NAME: {pokeName}</div> 
           <div className="pokeman-type">TYPE: {pokeType}</div>
           <div className="pokeman-abilities">ABILITIES: {abilities}</div>
           <div className="pokeman-id">ID: {pokeId}</div>
           <h1>{pokemonCon.poke1}</h1>
        </div>
        </PokeCardStyle>
    )
}

export default PokeCard;