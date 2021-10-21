import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";

function PokemonInfoSection({ pokemon }) {
  const [pokemonInfo, setpokemonInfo] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      console.log(res.data.stats[5]);
      // console.log(res.data.abilities[0].ability.name);
      // console.log(res.data.abilities[1].ability.name);
      setpokemonInfo({
        image: res.data.sprites.front_default,
        experience: res.data.base_experience,
        weight: res.data.weight,
        height: res.data.height,
        ability1: res.data.abilities[0].ability.name,
        ability2: res.data.abilities[1].ability.name,
        move1: res.data.moves[0].move.name,
        move2: res.data.moves[1].move.name,
        move3: res.data.moves[2].move.name,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        special_attack: res.data.stats[3].base_stat,
        special_defence: res.data.stats[4].base_stat,
        speed: res.data.stats[5].base_stat,
      });
    }
    getData();
  }, [pokemon]);

  return (
    <div>
      <h1 className="poke-heading">{pokemon}</h1>
      <div className="poke-section">
        <div className="poke-left">
          <img
            src={pokemonInfo.image}
            alt="pokemon-logo"
            className="poke-image"
          />
          <div className="poke-info-container">
            <div className="poke-info">
              <h2>Pokemon Experience -</h2>
              <h2> {pokemonInfo.experience}</h2>
            </div>
            <div className="poke-info">
              <h2>Pokemon weight -</h2>
              <h2>{pokemonInfo.weight} kg</h2>
            </div>
            <div className="poke-info">
              <h2>Pokemon Height -</h2>
              <h2>{pokemonInfo.height} m</h2>
            </div>
          </div>
          <div className="poke-info">
            <h2>Abilities - </h2>
            <div className="ability-items">
              <h2>1. {pokemonInfo.ability1}</h2>
              <h2>2. {pokemonInfo.ability2}</h2>
            </div>
          </div>
          <div className="poke-info">
            <h2>Moves - </h2>
            <div className="ability-items">
              <h2>1. {pokemonInfo.move1}</h2>
              <h2>2. {pokemonInfo.move2}</h2>
              <h2>3. {pokemonInfo.move3}</h2>
            </div>
          </div>
        </div>

        <div className="poke-right">
          <h2>{pokemonInfo.hp}</h2>
          <h2>{pokemonInfo.attack}</h2>
          <h2>{pokemonInfo.defence}</h2>
          <h2>{pokemonInfo.special_attack}</h2>
          <h2>{pokemonInfo.special_defence}</h2>
          <h2>{pokemonInfo.speed}</h2>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfoSection;
