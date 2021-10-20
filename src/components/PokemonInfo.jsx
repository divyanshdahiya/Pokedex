import React, { useEffect } from "react";
import axios from "axios";

function PokemonInfo({ pokemon }) {
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      console.log(res.data);
      var pokemonImage = res.data.sprites["front_default"];
      var pokemonExperience = res.data.base_experience;
      var pokemonHeight = res.data.height;
      var pokemonWeight = res.data.weight;
      var pokemonAbilities = res.data.abilities;
      var pokemonMoves = res.data.moves;
      var pokemonStats = res.data.stats;
      console.log(pokemonAbilities);
    }
    getData();
  }, [pokemon]);

  return (
    <div>
      <h1>{pokemon}</h1>
    </div>
  );
}

export default PokemonInfo;
