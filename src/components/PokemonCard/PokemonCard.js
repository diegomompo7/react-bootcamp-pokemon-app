const PokemonCard = ({ pokemon }) => {
  console.log("HOLA")
  return (
    <div className="pokemon-card">
      <p className="pokemon-card__name">{pokemon.name}</p>
    </div>
  )
}
export default PokemonCard
