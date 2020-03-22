var express = require('express');
var Handcontroller = require("../controllers/HandController")
var { sendControllers } = require("../controllers/controller")
var route = express.Router();

route.get('/controllers', sendControllers);

// route.get('/saludar/:name', Handcontroller.saludar);

// route.get('/levantarManos', Handcontroller.levantarManos)

route.post('/move/hand', Handcontroller.move)

module.exports = {
    route
}