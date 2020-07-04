const resolveRoutes = route => {
  if (route != 'about') {
    if (route === '/') {
      return route
    } else if (route.length <= 3) {
      return '/:id'
    } else if (route.includes('search')) {
      return '/:search'
    }
  }
  return `/${route}`

  // if (route.length <= 3) {
  //   let validRoute = route === '/' ? route : '/:id'
  //   return validRoute
  // }
  // //para casos como /about
  // return `/${route}`
}
export default resolveRoutes
