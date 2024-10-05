const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Lue Pokémon-tiedot POKEMONS.json-tiedostosta
const pokemonsFilePath = path.join(
  __dirname,
  "pokedex/src/data/_POKEMONS.json"
);
let pokemonData = [];

fs.readFile(pokemonsFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading _POKEMONS.json:", err);
    return;
  }
  pokemonData = JSON.parse(data);
});

// API-päätepisteet
app.get("/pokemon", (req, res) => {
  res.json(pokemonData);
});

app.get("/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemonData.find((p) => p.id === id);

  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).send("Pokémon not found");
  }
});

// Palvelimen käynnistys
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
