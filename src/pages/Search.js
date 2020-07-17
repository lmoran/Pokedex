import '../images/pokemonlogo.svg'
const Search = () => {
  const view = `
    <h1>Search Pokemon</h1>
    <form id= "form">
      <input type= "text" name="name" placeholder= "Search Pokemon"/>
      <button>Search</button>
    </form>
    <article>
      <div>
        <img src="./images/pokemonlogo.svg" alt="pokelogo">
      </div>
      <div class="poke-info" id="poke-info">
      </div>
      <a href= "#/">
      <button>Back</button>
      </a>
    </article>
  `
  return view
}
export default Search
