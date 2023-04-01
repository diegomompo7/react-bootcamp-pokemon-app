import { NavLink } from "react-router-dom";
import UseFetch from "../../hooks/useFetch";
import "./PokemonCard.scss";
import { FormattedMessage } from "react-intl";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData] = UseFetch(pokemon.url);

  return (
    <div className="pokemon-card">
      <img className="pokemon-card__image" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default}></img>
      <p className="pokemon-card__number">#{pokemonData?.id || ""}</p>
      <p className="pokemon-card__name">{pokemonData?.name || "- -"}</p>
      <div className="pokemon-card__data">
        <span className="pokemon-card__attr">
          <FormattedMessage id="pokemons:weight"></FormattedMessage>
        </span>{" "}
        {pokemonData?.weight}KG
        <span className="pokemon-card__attr">
          <FormattedMessage id="pokemons:height"></FormattedMessage>
        </span>{" "}
        {pokemonData?.height}M
      </div>

      <NavLink to={`/pokemon/${pokemonData?.id}`}>
        <button className="btn pokemon-card__more-info"><FormattedMessage id="general:more-info"></FormattedMessage></button>
      </NavLink>
    </div>
  );
};
export default PokemonCard;
