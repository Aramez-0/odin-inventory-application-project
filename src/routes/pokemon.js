const { Router } = require("express");
const pokemonRouter = Router();
const {
  renderPage,
  renderNewForm,
  newPokemon,
  deletePokemon,
} = require("../controllers/pokemon");

pokemonRouter.get("/", renderPage);
pokemonRouter.get("/new-pokemon", renderNewForm);
pokemonRouter.post("/new", newPokemon);
pokemonRouter.post("/delete", deletePokemon);

module.exports = pokemonRouter;
