//contains all displayed data of individual data, will contain poke data link
import "../../../../styles/PokeCard.css";
import { Link } from "react-router-dom";
import getPokeUrlId from "../../../../utility/PokeUrlDeconstructor";
import { getPokeImgUrl } from "../../../../utility/Links&Data";

const PokeCard = ({ pokemon }) => {
  var pokeId = getPokeUrlId(pokemon.url);
  var pokeName = pokemon.name;
  return (
    <Link to={`/pokemon/${pokeName}`}>
      <div className="poke-card">
        <span className="poke-id">{pokeId}</span>
        <span className="poke-name">{pokeName}</span>
        <div className="poke-sprite">
          <img src={getPokeImgUrl(pokeId)} alt={pokeName} />
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
