const express = require("express");
const routes = express.Router();

const SearchController = require('./SearchController');

routes.post("/search", SearchController.search);

module.exports = routes;