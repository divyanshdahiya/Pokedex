import React from "react";
import "../index.css";

function PokemonList({ setPokemon, pokemonList }) {
  return (
    <div className="pokemon-list">
      {pokemonList.map((p) => (
        <div className="pokemon-list-items" key={p}>
          <li href="" onClick={() => setPokemon(p)}>
            {p}
          </li>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
