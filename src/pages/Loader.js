import Loading from '../images/loading.gif'

const Loader = () => {
  const view = `  
 
              <h3 className="loading__msg">Loading...</h3>
              <img className="loading__img" src=${Loading} alt="Loading..." />
          
  `
  return view
}
export default Loader
