//initial async fetch of poke data, only returns results from fetch
//example data: {count:N/A,next:N/A,previous:N/A,results:[{pokedata1},{pokedata2}]}
import Fetch from "./Fetch";
import { PokeListUrl } from "./Links&Data";

async function PokeInitFetch() {
  return await Fetch(PokeListUrl).then((data) => {
    return data.results;
  });
}

export default PokeInitFetch;
