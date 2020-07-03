import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
  const ids = getHash()
  const character = await getData(ids)
  const backCharacter = await getData(parseInt(ids) - 1)
  const nextCharacter = await getData(parseInt(ids) + 1)

  const { name, id, weight, height } = character
  const imgNormal = character.sprites.front_default
  const imgBack = character.sprites.back_default
  const imgShiny = character.sprites.front_shiny
  const imgBackShiny = character.sprites.back_shiny

  const view = `
  <div class="Characters-inner" id="Character">
    <article class="Character-card">
      <div class = "Character-card--info">
        <h1>${name}</h1>
        <h1>PokedexID: ${id}</h1>
        <h1>Weight: ${weight}</h1>
        <h1>Height: ${height}</h1>
      </div>
      <div class = "Character-card--details">
        <h2>Type(s)</h2>
        ${character.types
          .map(
            type => `<span class="${type.type.name}"> ${type.type.name}</span>`
          )
          .join('')}
          <h2>Normal</h2>
          <img src="${imgNormal}"/ alt= pokemon">
          <img src="${imgBack}"/ alt= pokemon">
          <h2>Shiny</h2>
          <img src="${imgShiny}"/ alt= pokemon">
          <img src="${imgBackShiny}"/ alt= pokemon">
      </div>     
    </article>
    <article class="Character-card">
    <span><b>HP: </b>${character.stats[0].base_stat}</span>
    <span><b>Special-attack: </b>${character.stats[3].base_stat}</span>
    <span><b>special-defense: </b>${character.stats[4].base_stat}</span>
    <span><b>Attack: </b>${character.stats[1].base_stat}</span>
    <span><b>Defense: </b>${character.stats[2].base_stat}</span>
    <span><b>Speed: </b>${character.stats[5].base_stat}</span>
    </article>
  `

  if (parseInt(ids) > 1) {
    const back = `  
    <article class="Character-end" id = "end">  
      <a href="#/${backCharacter.id}">
      <img src="${backCharacter.sprites.front_default}"/>
      back
      </a>
      <a href="#/${nextCharacter.id}"> 
      <img src="${nextCharacter.sprites.front_default}"/>
      next
      </a>
    </article>
  </div>
`
    var viewEnd = `${view}${back}`
  } else {
    const next = `  
      <article class="Character-end" id = "end">  
      <a href="#/${nextCharacter.id}"> 
      <img src="${nextCharacter.sprites.front_default}"/>
      next
      </a>
      </article>
    </div>
 `
    viewEnd = `${view}${next}`
  }

  return viewEnd
}
export default Character
