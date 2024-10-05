import React, { useEffect, useState } from "react";
import axios from "axios";

const PokedexList = ({ onSelect }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("data/_POKEMONS.json")
      .then((response) => {
        setPokemonList(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the Pokémon list!", error);
      });
  }, []);

  return (
    <div className="pokedex-list">
      {pokemonList.map((pokemon) => (
        <div
          className="pokemon-card"
          key={pokemon.id}
          onClick={() => onSelect(pokemon.id)}
        >
          <div
            style={{
              backgroundImage: `url(${pokemon.imageUrl})`,
            }}
            alt={pokemon.name}
            width="100"
            className="pokemon-image"
          />
          <div className="pokemon-name">{pokemon.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PokedexList;
