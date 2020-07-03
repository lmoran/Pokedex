import totalPokemons from '../utils/totalPokemon'

const Home = async () => {
  const Character = await totalPokemons()
  console.log(Character)
  const view = `
  <div class="Characters">
    <div class="Characters">
        <a href = #/search>busqueda</a>
    </div>
      ${Character.map(
        character => `
      <article class="Characters__card">
        <div class="characters__card--info">
          <img src="${character.sprites.front_default}" alt="pokemon">
          <h2 class=" ">${character.name}</h2>
          <p>Pokedesk ID: ${character.id} </p>
          <span> ${character.types
            .map(
              type =>
                `<span class="${type.type.name}"> ${type.type.name}</span>`
            )
            .join('')} </span>
        </div>
        <a href="#/${character.id}">
          <button class="characters__card--btn">Details</button>
        </a>
      `
      ).join('')}
      </article>
  </div>
  `
  return view
}
export default Home
