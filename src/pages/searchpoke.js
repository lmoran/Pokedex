const SearchPoke = poke => {
  const view = `
  <div>
    <img src="${poke.sprites.front_default}" alt="pokelogo">
    <span>${poke.id}</span>
    <span>${poke.name}</span>
  </div>
  <div>
    <span>Height</span>
    <span>Weight</span>
  </div>
  `
  return view
}
export default SearchPoke
