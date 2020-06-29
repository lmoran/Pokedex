const resolveRoutes = route => {
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id'
    return validRoute
  }
  //para casos como /about
  return `/${route}`
}
export default resolveRoutes
