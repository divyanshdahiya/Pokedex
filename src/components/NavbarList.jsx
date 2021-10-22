import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import PokemonList from "./PokemonList";

function NavbarList({ setPokemon }) {
  const [pokemonList, setpokemonList] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
      setpokemonList(res.data.results.map((p) => p.name));
    }
    getData();
  }, []);

  return (
    <div>
      <PokemonList setPokemon={setPokemon} pokemonList={pokemonList} />
    </div>
  );
}

export default NavbarList;
