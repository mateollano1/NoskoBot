var express = require('express');
var Handcontroller = require("../controllers/HandController")
var { sendControllers } = require("../controllers/controller")
var route = express.Router();

route.get('/controllers', sendControllers);

// route.get('/saludar/:name', Handcontroller.saludar);

route.post('/move/handsup', Handcontroller.handsUp)

route.post('/move/hand', Handcontroller.move)
route.post('/move/whereisbaby', Handcontroller.whereIsBaby)

module.exports = {
    route
}