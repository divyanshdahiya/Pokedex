import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PokemonInfoSection from "./components/PokemonInfoSection";

function App() {
  console.log("App created by Divyansh Dahiya");
  const [pokemon, setPokemon] = useState("bulbasaur");

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
