import getData from './getData'
const pokemones = 150

const totalPokemons = async () => {
  const pokemons = []
  for (let i = 1; i < pokemones; i++) {
    const data = await getData(i)
    console.log(data)
    pokemons.push(data)
    /* return poke */
  }
  return pokemons
}

export default totalPokemons
