//links and the amount of pokemon rendered
const pokeAmtDefault = 151;

function getPokeUrl(pokeNameorId) {
  return `https://pokeapi.co/api/v2/pokemon/${pokeNameorId}/`;
}
function getPokeListUrl(pokeAmt = pokeAmtDefault) {
  return `https://pokeapi.co/api/v2/pokemon/?limit=${pokeAmt}`;
}
function getPokeImgUrl(pokeId) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeId}.gif`;
}

export { getPokeUrl, getPokeListUrl, getPokeImgUrl };
