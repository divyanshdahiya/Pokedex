import React from "react";
import "../index.css";
import { Bar } from "react-chartjs-2";

function Chart({ pokemonInfo }) {
  return (
    <div className="chart-info">
      <h2>Pokemon's HP -{pokemonInfo.hp}</h2>
      <h2>Pokemon's Attack -{pokemonInfo.attack}</h2>
      <h2>Pokemon's Defence -{pokemonInfo.defence}</h2>
      <h2>Pokemon's Speed -{pokemonInfo.speed}</h2>
      <h2>Pokemon's Special Attack -{pokemonInfo.special_attack}</h2>
      <h2>Pokemon's Special Defence -{pokemonInfo.special_defence}</h2>

      <Bar
        className="chart"
        data={{
          labels: [
            "HP",
            "Attack",
            "Defence",
            "Speed",
            "Special-attack",
            "Special-defence",
          ],
          datasets: [
            {
              label: "Pokemon-data",
              data: [
                pokemonInfo.hp,
                pokemonInfo.attack,
                pokemonInfo.defence,
                pokemonInfo.speed,
                pokemonInfo.special_attack,
                pokemonInfo.special_defence,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 5,
            },
          ],
        }}
        height={470}
        width={710}
      />
    </div>
  );
}

export default Chart;
