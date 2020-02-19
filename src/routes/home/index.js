/** 
  * @desc this file will map REST APIs relevent to controllers functions.
  * @author Dhruvin Pipalia dhruvinhi@gmail.com
  * @required express - to configure the routes with the controller functions
*/
const express = require("express");
const routes = express.Router();

const SearchController = require('./SearchController');

routes.post("/search", SearchController.search);

module.exports = routes;