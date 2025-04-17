const {
  getAllPokemon,
  getAllTrainers,
  getPokemonOfType,
} = require("../db/queries");

exports.renderPage = async (req, res) => {
  const chp = req.query.pokemon;
  const cht = req.query.trainers;
  const type = req.query.type;
  const pokemon =
    type != "none"
      ? await getPokemonOfType(type)
      : chp == "on"
      ? await getAllPokemon()
      : false;
  const trainers = cht == "on" ? await getAllTrainers() : false;
  res.render("browse", { pokemon: pokemon, trainers: trainers });
};

// why does it say getPokemonOfType is not a function
