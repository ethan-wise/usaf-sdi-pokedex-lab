//displays information about the individual pokemon when clicked
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetch from "../../../utility/AsyncFetch";

function PokeInfo() {
  const { name } = useParams();

  useEffect(() => {});

  return (
    <div className="poke-info">
      <h2>PokeInfo:{name}</h2>
    </div>
  );
}

export default PokeInfo;
