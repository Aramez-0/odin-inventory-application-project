const { getAllPokemon, getAllTrainers } = require("../db/queries")

exports.renderPage = async (req, res) => {
  const pokemon = await getAllPokemon()
  const trainers = await getAllTrainers()
  res.render("browse", {pokemon: pokemon, trainers: trainers});
};
