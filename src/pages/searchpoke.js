const SearchPoke = poke => {
  const view = `
  <div class="Search__details-info-show" >
    <div class="Search__details-info-show-image">
    <img src="${poke.sprites.front_default}" alt="pokelogo">
    </div>
    <div class="Search__details-info-show-name">
      <h3> # ${poke.id}</h3>
      <h1>${poke.name}</h1>
    </div>
    <div class="Search__details-info-show-detail">
      <h4>Weight: ${parseInt(poke.weight) / 10} Kg</h4>
      <h4>Height: ${parseInt(poke.height) / 10} m</h4>
    </div>
  </div>
  `
  return view
}
export default SearchPoke
