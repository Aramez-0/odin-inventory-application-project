const { postNewPokemon, getAllPokemon, dbDeletePokemon } = require("../db/queries");

exports.renderPage = async (req, res) => {
  const pokemon = await getAllPokemon();
  res.render("pokemon", { pokemon: pokemon });
};

exports.renderNewForm = (req, res) => {
  res.render("new_pokemon");
};

exports.newPokemon = async (req, res) => {
  const { name, type } = req.body;
  await postNewPokemon(name, type);
  res.redirect("/pokemon");
};

exports.deletePokemon = async (req, res) => {
  const name = req.body.name
  await dbDeletePokemon(name)
  res.redirect('/pokemon')
}