const API = 'https://pokeapi.co/api/v2/pokemon/'

const getData = async id => {
  const url_api = id ? `${API}${id}` : API
  try {
    const response = await fetch(url_api)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ocurrio un error', error)
  }
}
export default getData
