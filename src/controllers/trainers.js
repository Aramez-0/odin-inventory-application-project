const {
  postNewTrainer,
  getAllTrainers,
  dbDeleteTrainer,
} = require("../db/queries");

exports.renderPage = async (req, res) => {
  const trainers = await getAllTrainers();
  res.render("trainers", { trainers: trainers });
};

exports.renderNewForm = (req, res) => {
  res.render("new_trainer");
};

exports.newTrainer = async (req, res) => {
  const { name, p1, p2, p3, p4, p5, p6 } = req.body;
  await postNewTrainer(name, p1, p2, p3, p4, p5, p6);
  res.redirect("/trainers");
};

exports.deleteTrainer = async (req, res) => {
  const name = req.body.name;
  console.log(name);
  await dbDeleteTrainer(name);
  res.redirect("/trainers");
};
