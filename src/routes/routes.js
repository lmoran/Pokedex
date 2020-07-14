import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Search from '../pages/Search'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import getData from '../utils/getData'
import SearchPoke from '../pages/searchpoke'

const routes = {
  '/': Home,
  '/:id': Character,
  '/:search': Search,
  '/contact': 'Contact'
}

const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()

  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404

  content.innerHTML = await render()
  const form = null || document.querySelector('#form')
  const info = null || document.querySelector('#poke-info')
  if (form && info) {
    form.addEventListener('submit', async event => {
      event.preventDefault()
      const data = new FormData(form)
      const poke = await getData(`${data.get('name')}`)
      const html = SearchPoke(poke)
      info.innerHTML = html
    })
  }
}

export default router
