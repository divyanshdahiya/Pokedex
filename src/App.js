import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PokemonInfoSection from "./components/PokemonInfoSection";

function App() {
  const [pokemon, setPokemon] = useState("bulbasaur");
  console.log("this is pokemon" + " " + pokemon);

  return (
    <div className="grid-container">
      <div className="grid-left">
        <Navbar setPokemon={setPokemon} />
      </div>
      <div className="grid-right">
        <PokemonInfoSection pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
