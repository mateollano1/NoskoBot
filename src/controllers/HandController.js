var bodyParser = require('body-parser')
const Gpio = require('pigpio').Gpio;

const rightClavicle = new Gpio(4, { mode: Gpio.OUTPUT });
const RightShoulder = new Gpio(5, { mode: Gpio.OUTPUT });
const RightHand = new Gpio(6, { mode: Gpio.OUTPUT });
const leftClavicle = new Gpio(7, { mode: Gpio.OUTPUT });
const leftShoulder = new Gpio(9, { mode: Gpio.OUTPUT });
const leftHand = new Gpio(8, { mode: Gpio.OUTPUT });
saludar = (req, res) => {
    let v = "hola"
    let id = req.params.name
    res.json({
        v,
        id
    })
}
handsUp = (req, res) => {
    let v = "manos levantadas"
    console.log("voy a levantar manos");



    levantarCostillaDerecha()
    levantarCostillaIzquierda()

    res.json({
        v
    })
}

const levantarCostillaDerecha = async () => {
    rightClavicle.digitalWrite(1)
    rightClavicle.pwmFrequency(10)
    const resp = await rightClavicle.servoWrite(500)
    setTimeout(() => {
        rightClavicle.digitalWrite(0)
    }, 1500)
}

async function levantarCostillaIzquierda() {
    leftClavicle.digitalWrite(1)
    leftClavicle.pwmFrequency(10)
    await leftClavicle.servoWrite(2500)
    setTimeout(() => {
        leftClavicle.digitalWrite(0)
    }, 1500)
}

const moveRightHand = async (value) => {

    console.log("mano derecha " + value);
    RightHand.digitalWrite(1)
    RightHand.servoWrite(invertConsole(value))
    setTimeout(() => {
        RightHand.digitalWrite(0)
    }, 500)

}
const moveLeftHand = async (value) => {
    console.log("mano izquierda " + value);
    leftHand.digitalWrite(1)
    leftHand.servoWrite(value)
    setTimeout(() => {
        leftHand.digitalWrite(0)
    }, 500)
}
const moveRightShoulder = async (value) => {
    console.log("hombro derecho " + value);
    RightShoulder.digitalWrite(1)
    RightShoulder.servoWrite(value)
    setTimeout(() => {
        RightShoulder.digitalWrite(0)
    }, 500)
}
const moveLeftShoulder = async (value) => {
    console.log("hombro izquierdo " + value);
    leftShoulder.digitalWrite(1)
    leftShoulder.servoWrite(invertConsole(value))
    setTimeout(() => {
        leftShoulder.digitalWrite(0)
    }, 500)
}

const moveRightClavicle = async (value) => {
    console.log("clavicula derecha " + value);
    rightClavicle.digitalWrite(1)
    rightClavicle.servoWrite(invertConsole(value))
    setTimeout(() => {
        rightClavicle.digitalWrite(0)
    }, 500)
}
const moveLeftClavicle = async (value) => {
    console.log("clavicula izquierda " + value);
    leftClavicle.digitalWrite(1)
    leftClavicle.servoWrite(value)
    setTimeout(() => {
        leftClavicle.digitalWrite(0)
    }, 500)
}
invertConsole = (value) => {
    let res = (value - 3000) * -1
    if (res < 0) {
        return 0
    }
    return res
}
whereIsBaby = () =>{

}
move = (req, res) => {
    let id = req.body.id
    let value = req.body.value
    console.log(id);
    console.log(value);
    let v = value

    switch (id) {
        case 0:
            moveRightClavicle(value)
            break;
        case 1:
            moveLeftClavicle(value)
            break;
        case 2:
            moveRightShoulder(value)
            break;
        case 3:
            console.log("entro");

            moveRightHand(value)
            break;
        case 4:
            moveLeftShoulder(value)
            break;
        case 5:
            moveLeftHand(value)
            break;

        default:
            console.log("def");

            break;
    }
    res.json({
        v
    })

}
module.exports = {
    // saludar,
    // levantarManos,
    move,
    handsUp,
    whereIsBaby


}