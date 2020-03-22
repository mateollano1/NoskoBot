const Gpio = require('pigpio').Gpio;

const rightClavicle = new Gpio(4, { mode: Gpio.OUTPUT });
const RightShoulder = new Gpio(5, { mode: Gpio.OUTPUT });
const RightHand = new Gpio(6, { mode: Gpio.OUTPUT });
const leftClavicle = new Gpio(7, { mode: Gpio.OUTPUT });
const leftShoulder = new Gpio(9, { mode: Gpio.OUTPUT });
const leftHand = new Gpio(8, { mode: Gpio.OUTPUT });

sendControllers = (req, res) => {
    console.log("estoy en send controllers");

    res.json({
        "controllers": [
            { "id": "0", "name": "Clavícula derecha", "type": "hand"},
            { "id": "1", "name": "Clavícula izquierda", "type": "hand" },
            { "id": "2", "name": "Hombro derecho", "type": "hand" },
            { "id": "3", "name": "Muñeca derecha", "type": "hand" },
            { "id": "4", "name": "Hombro izuierdo", "type": "hand" },
            { "id": "5", "name": "Muñeca Izquierda", "type": "hand" },
        ]
    })
}
getControlsPosition = () =>{

}
module.exports = {
    sendControllers
}