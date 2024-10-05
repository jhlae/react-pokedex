import React, { useState } from "react";
import PokedexList from "./components/PokedexList";
import PokemonDetails from "./components/PokemonDetails";
import "./App.css";

const App = () => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <div className="pokedex">
        <PokedexList onSelect={setSelectedPokemonId} />
        {/* <PokemonDetails selectedPokemonId={selectedPokemonId} /> */}
      </div>
    </div>
  );
};

export default App;
