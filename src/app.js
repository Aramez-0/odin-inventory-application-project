const express = require("express");
const app = express();
const path = require("node:path");
const pokemonRouter = require("./routes/pokemon");
const trainersRouter = require("./routes/trainers");
const browseRouter = require("./routes/browse");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});
app.use("/pokemon", pokemonRouter);
app.use("/trainers", trainersRouter);
app.use("/browse", browseRouter);

app.listen(3000);
