const Gpio = require('pigpio').Gpio;
const costillaDerecha = new Gpio(4, { mode: Gpio.OUTPUT });
const costillaIzquierda = new Gpio(17, { mode: Gpio.OUTPUT });
saludar = (req, res) => {
    let v = "hola"
    let id = req.params.name
    res.json({
        v,
        id
    })
}
levantarManos = (req, res) => {
    let v = "manos levantadas"
    console.log("voy a levantar manos");
    
   
    
    levantarCostillaDerecha()
    levantarCostillaIzquierda()
    
    res.json({
        v
    })
}

 const levantarCostillaDerecha = async()=>{
    costillaDerecha.digitalWrite(1)
    costillaDerecha.pwmFrequency(10)
     const resp = await costillaDerecha.servoWrite(500)
     setTimeout(()=>{
         costillaDerecha.digitalWrite(0)
    },1500)
}

async function levantarCostillaIzquierda(){
    costillaIzquierda.digitalWrite(1)
    costillaIzquierda.pwmFrequency(10)
    await costillaIzquierda.servoWrite(2500)
    setTimeout(()=>{
        costillaIzquierda.digitalWrite(0)
   },1500)
    
}

module.exports = {
    saludar,
    levantarManos
}