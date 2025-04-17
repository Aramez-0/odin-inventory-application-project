const pool = require("./pool");

exports.postNewPokemon = async (name, type) => {
  await pool.query("INSERT INTO pokemon (name, type) VALUES ($1, $2)", [
    name,
    type,
  ]);
};

exports.postNewTrainer = async (name, p1, p2, p3, p4, p5, p6) => {
  await pool.query(
    "INSERT INTO trainer (name, pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [name, p1, p2, p3, p4, p5, p6]
  );
};

exports.getAllPokemon = async () => {
  const { rows } = await pool.query("SELECT * FROM pokemon");
  return rows;
};

exports.getAllTrainers = async () => {
  const { rows } = await pool.query("SELECT * FROM trainer");
  return rows;
};

exports.dbDeletePokemon = async (name) => {
  await pool.query("DELETE FROM pokemon WHERE name LIKE $1", [name]);
};

exports.dbDeleteTrainer = async (name) => {
  await pool.query("DELETE FROM trainer WHERE name LIKE $1", [name]);
};

exports.getPokemonOfType = async (type) => {
  const { rows } = await pool.query(
    "SELECT * FROM pokemon WHERE type LIKE $1",
    [type]
  );
  return rows;
};
