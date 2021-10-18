import React from "react";
import pokeball from "../pokeball.png";
import "../index.css";
import NavbarList from "./NavbarList";

function Navbar({ setPokemon }) {
  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        <img src={pokeball} style={{ width: "50px" }} alt="" />
        <h1>POKEDEX</h1>
      </div>
      <p>Everything you wanted to know about your favourite pocket monster!!</p>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <hr style={{ width: "70%", margin: "35px auto 0 auto" }} />

      <NavbarList setPokemon={setPokemon} />
    </div>
  );
}

export default Navbar;
