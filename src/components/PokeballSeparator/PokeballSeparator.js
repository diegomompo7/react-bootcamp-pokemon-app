import "./PokeballSeparator.scss"
import pokeballGray from "../../assets/pokeball-gray.png"

const PokeballSeparator = () => {
  return (
    <div className="pokeball-separator">
      <span className="pokeball-separator__line"></span>
      <img className="pokeball-separator__image" src={pokeballGray}></img>
      <span className="pokeball-separator__line"></span>
    </div>
  )
}
export default PokeballSeparator
