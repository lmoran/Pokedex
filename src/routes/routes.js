import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Search from '../pages/Search'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import Loader from '../pages/Loader'

const routes = {
  '/': Home,
  '/:id': Character,
  '/:search': Search,
  '/contact': 'Contact'
}

const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  const loader = null || document.getElementById('loader')
  header.innerHTML = await Header()

  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404

  /* loader.innerHTML = await Loader() */
  content.innerHTML = await render()
}

export default router
