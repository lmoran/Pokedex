import '../images/pokemonlogo.svg'
const Search = () => {
  const view = `
  <div class="Search">
    <h1 class="Search__title" >Search Pokemon</h1>
    <form class= "Search__form" id= "form">
      <input type= "text" name="name" placeholder= "Pokemon ID"/>
      <button class= "Search__form-btn" >Search</button>
    </form>
    <article class= "Search__details">
      <div class= "Search__details-header">
        <img src="./images/pokemonlogo.svg" alt="pokelogo">
      </div>
      <div class="Search__details-info" id="poke-info">
      </div>
    </article>
      <a class="Search__details-btn" href= "#/">
      <button class="Search__details-btn">Back</button>
      </a>
  </div>
  `
  return view
}
export default Search
