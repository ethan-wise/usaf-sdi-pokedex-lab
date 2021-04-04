//contains all displayed data of individual data, will contain poke data link
import GetPokeUrlId from "../../../../utility/GetPokeUrlId";
import { PokeImgUrl } from "../../../../utility/Links&Data";
import "../../../../styles/PokeCard.css";

const PokeCard = ({ pokemon }) => {
  var pokeId = GetPokeUrlId(pokemon.url);
  var pokeName = pokemon.name || "";
  return (
    <div className="poke-card">
      <div className="poke-sprite">
        <img src={PokeImgUrl + pokeId + ".gif"} alt={pokeName} />
      </div>
      <div className="poke-name">
        {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
      </div>
      <span className="poke-id">{pokeId}</span>
    </div>
  );
};

export default PokeCard;
