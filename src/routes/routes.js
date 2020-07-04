import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Search from '../pages/Search'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

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

  /* if (loader.children[0] != null) {
    loader.children[0].remove()
  } */
}

export default router
