var express = require('express');
// const app = express()
var controller = require("../controllers/controller")
var route = express.Router();

route.get('/saludar/:name', controller.saludar);

route.get('/levantarManos', controller.levantarManos)

module.exports = {
    route
}