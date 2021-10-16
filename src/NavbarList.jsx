import React, { useEffect } from "react";
import "./index.css";
import axios from "axios";

function NavbarList() {
  // const [state, setstate] = useState(initialState)
  var listOfPokemon = [];
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
      console.log(res.data);
      for (let i = 0; i < res.data.results.length; i++) {
        listOfPokemon[i] = res.data.results[i].name;
      }
      console.log(listOfPokemon);
    }
    getData();
  });

  return (
    <div>
      <h1>1.</h1>
    </div>
  );
}

export default NavbarList;
