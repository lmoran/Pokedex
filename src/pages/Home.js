import totalPokemons from '../utils/totalPokemon'

const Home = async () => {
  const Character = await totalPokemons()

  const view = `
  <div class="Characters">
    <div class="Characters__search">
        <a href = "#/search" class="Characters__search-text">Search Pokemon</a>
    </div>
    <div class="Characters__items">
        ${Character.map(
          character => `
        <article class="Characters__items-card">
          <div class="Characters__items-card-details">
            <img src="${character.sprites.front_default}" alt="pokemon">
            <div class="Characters__items-card-info">
              <h1 class="Characters__items-card-info-name">${
                character.name
              }</h1>
              <p class="Characters__items-card-info-id"><b>Pokedesk ID:</b> #${
                character.id
              } </p>
              ${character.types
                .map(
                  type => `
                      <span class="${type.type.name}"> ${type.type.name}</span>
                    `
                )
                .join('')} 
            </div>
          </div>
            <a href="#/${character.id}" class="Characters__items-card-btn ">
              Details
            </a>
        </article>
          `
        ).join('')}
    </div>
  </div>
  `
  return view
}
export default Home
