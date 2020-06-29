import getData from '../utils/getData'

const Home = async () => {
  const Character = await getData()
  const view = `
  <div class="Characters">
    ${Character.results.map(
      character => `
      <article class="Characters__card">
        <div class="characters__card--info">
          <img src="" alt="pokemon">
          <h2 class=" ">${character.name}</h2>
          <p>Pokedesk ID: </p>
          <span>types</span>
        </div>
        <a href="#/id">
          <button class="characters__card--btn">Details</button>
        </a>
      </article>
      `
    )}
  </div>
  `
  return view
}
export default Home
