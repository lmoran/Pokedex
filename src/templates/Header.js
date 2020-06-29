import '../images/pokeLogo.png'
const Header = () => {
  const view = `
  <div class="Header__main">
    <div class="Header__main--logo">
        <a href="#/">
          <img src="./images/pokeLogo.png" alt="pokelogo">
        </a>
    </div>
    <div class="Header__nav">
      <a href="#/about/">
        About
      </a>
    </div>
  </div>
  `
  return view
}
export default Header
