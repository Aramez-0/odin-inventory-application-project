const { Router } = require("express");
const trainersRouter = Router();
const {
  renderPage,
  renderNewForm,
  newTrainer,
  deleteTrainer,
} = require("../controllers/trainers");

trainersRouter.get("/", renderPage);
trainersRouter.get("/new-trainer", renderNewForm);
trainersRouter.post("/new", newTrainer);
trainersRouter.post("/delete", deleteTrainer)

module.exports = trainersRouter;
