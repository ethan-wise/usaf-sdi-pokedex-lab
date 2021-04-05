//pulls poke id from fetch -> results -> pokemon -> url
//example url:"https://pokeapi.co/api/v2/pokemon/59/"
function getPokeUrlId(url) {
  if (url !== undefined) {
    var resultArr = url
      .split("/")
      .filter((value) => {
        return Boolean(value);
      })
      .filter((value) => {
        return !isNaN(value);
      })[0];
    return resultArr;
  }
  return "";
}

export default getPokeUrlId;
