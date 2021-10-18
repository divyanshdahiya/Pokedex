import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const [pokemon, setPokemon] = useState("bulbasaur");
  console.log("this is pokemon" + " " + pokemon);

  return (
    <div className="grid-container">
      <div className="grid-left">
        <Navbar setPokemon={setPokemon} />
      </div>
      <div className="grid-right">
        <PokemonInfo pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
