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

  /*  setTimeout(() => {
  }, 1000) */
  if (content.children[0]) {
    content.children[0].remove()
  }
  const $load = document.createElement('img')
  setAttributes($load, {
    src: './images/loading.gif',
    width: '250',
    height: '250',
    style: 'margin-top: 5em'
  })

  content.append($load)
  setTimeout(async () => {
    content.innerHTML = await render()
  }, 500)
  setTimeout(() => {
    const form = null || document.querySelector('#form')
    const info = null || document.querySelector('#poke-info')
    if (form && info) {
      form.addEventListener('submit', async event => {
        event.preventDefault()

        if (info.children[0]) {
          info.children[0].remove()
        }
        const $loads = document.createElement('img')
        setAttributes($loads, {
          src: './images/loading.gif',
          width: '120',
          height: '120',
          style: 'margin-top: 1.5em'
        })

        info.append($loads)

        try {
          const data = new FormData(form)
          const poke = await getData(`${data.get('name')}`)
          const html = await SearchPoke(poke)
          setTimeout(() => {
            info.innerHTML = html
          }, 500)
        } catch (error) {
          swal('Lo sentimos', 'Pokemon no encontrado', 'error')
          $loads.remove()
        }
      })
    }
  }, 500)
}

export default router
