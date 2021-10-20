import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonInfoSection({ pokemon }) {
  const [pokemonInfo, setpokemonInfo] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      console.log(res.data);
      setpokemonInfo({
        experience: res.data.base_experience,
        weight: res.data.weight,
        height: res.data.height,
        abilities: res.data.abilities,
        moves: res.data.moves,
        stats: res.data.stats,
      });
    }
    getData();
  }, [pokemon]);

  return (
    <div>
      <h1>{pokemonInfo.experience}</h1>
      <h1>{pokemonInfo.weight}</h1>
      <h1>{pokemonInfo.height}</h1>
    </div>
  );
}

export default PokemonInfoSection;
