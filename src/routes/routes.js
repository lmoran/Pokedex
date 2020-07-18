import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Search from '../pages/Search'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import getData from '../utils/getData'
import SearchPoke from '../pages/searchpoke'
import Error404 from '../pages/Error404'
import '../images/loading.gif'
import setAttributes from '../utils/setAttributes'

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

  if (content.children[0]) {
    content.children[0].remove()
  }
  const $load = document.createElement('img')
  setAttributes($load, {
    src: './images/loading.gif',
    width: '300',
    height: '300',
    style: 'margin-top: 5em'
  })

  content.append($load)
  setTimeout(async () => {
    content.innerHTML = await render()
  }, 500)

  const form = null || document.querySelector('#form')
  const info = null || document.querySelector('#poke-info')

  if (form && info) {
    form.addEventListener('submit', async event => {
      event.preventDefault()

      if (info.children[0]) {
        info.children[0].remove()
      }
      const $load = document.createElement('img')
      setAttributes($load, {
        src: './images/loading.gif',
        width: '100',
        height: '100'
      })

      info.append($load)

      try {
        const data = new FormData(form)
        const poke = await getData(`${data.get('name')}`)
        const html = SearchPoke(poke)
        info.innerHTML = html
      } catch (error) {
        swal('Lo sentimos', 'Pokemon no encontrado', 'error')
        $load.remove()
      }
    })
  }
}

export default router
