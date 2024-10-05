import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetails = ({ selectedPokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (selectedPokemonId) {
      axios
        .get(`http://localhost:3001/pokemon/${selectedPokemonId}`)
        .then((response) => {
          setPokemon(response.data);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the Pokémon details!",
            error
          );
        });
    }
  }, [selectedPokemonId]);

  if (!pokemon) return <div>Select a Pokémon to see details</div>;

  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <img src={pokemon.imageUrl} alt={pokemon.name} width="500" />
    </div>
  );
};

export default PokemonDetails;
