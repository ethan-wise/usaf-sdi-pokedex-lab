//creates list of poke cards, interfaces with context
import { useContext } from "react";
import PokeContext from "../../../../utility/PokeContext";
import PokeCard from "./PokeCard";
import "../../../../styles/PokeList.css";

function PokeList() {
  const { pokeData } = useContext(PokeContext);
  return (
    <div className="poke-list">
      {pokeData.map((poke, i) => {
        return <PokeCard pokemon={poke} key={i} />;
      })}
    </div>
  );
}

export default PokeList;
