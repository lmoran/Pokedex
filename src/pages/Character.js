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
  <div class="Characters" id="Character">
    <article class="Characters__search">
        <a href = "#/search" class="Characters__search-text">Search Pokemon</a>
        <a href = "#/" class="Characters__search-text home">Home</a>
    </article>
    <article class="Characters__inner">
      <div class = "Characters__inner-info">
        <h1>${name}</h1>
        <h3>PokedexID: #${id}</h3>
        <h4>Weight: ${parseInt(weight) / 10} Kg</h4>
        <h4>Height: ${parseInt(height) / 10} m</h4>
      </div>
      <div class = "Characters__inner-types">
        <h3>Type(s)</h3>
        ${character.types
          .map(type => `<p class="${type.type.name}"> ${type.type.name}</p>`)
          .join('')}
      </div> 
      <div class = "Characters__inner-images">
          <h3>Normal</h3>
          <img src="${imgNormal}"/ alt= pokemon">
          <img src="${imgBack}"/ alt= pokemon">
      </div> 
      <div class = "Characters__inner-images">
          <h3>Shiny</h3>
          <img src="${imgShiny}"/ alt= pokemon">
          <img src="${imgBackShiny}"/ alt= pokemon">
      </div>    
    </article>
    <article class="Characters__inner">
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
    <article class="Characters__end" id = "end">  
      <a href="#/${backCharacter.id}">
      <span><b> < </b>#${backCharacter.id} </span>
      <img src="${backCharacter.sprites.front_default}"/>
      </a>
      <a href="#/${nextCharacter.id}"> 
      <img src="${nextCharacter.sprites.front_default}"/>
      <span>#${nextCharacter.id} <b> > </b></span>
      </a>
    </article>
  </div>
`
    var viewEnd = `${view}${back}`
  } else {
    const next = `  
      <article class="Characters__end1" id = "end">  
      <a href="#/${nextCharacter.id}"> 
      <img src="${nextCharacter.sprites.front_default}"/>
      <span>#${nextCharacter.id} <b> > </b></span>
      </a>
      </article>
    </div>
 `
    viewEnd = `${view}${next}`
  }

  return viewEnd
}
export default Character
