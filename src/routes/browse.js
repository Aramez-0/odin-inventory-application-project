const { Router } = require("express");
const browseRouter = Router();
const { renderPage } = require("../controllers/browse");

browseRouter.get("/", renderPage);

module.exports = browseRouter;
