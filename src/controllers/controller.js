var PiServo = require('pi-servo');

saludar = (req, res) => {
    let v = "hola"
    let id = req.params.name
    res.json({
        v,
        id
    })
}
levantarManos = (req, res) => {
    // pass the GPIO number
    var sv1 = new PiServo(4);

    sv1.open().then(function() {
        sv1.setDegree(100); // 0 - 180
    });
}

module.exports = {
    saludar,
    levantarManos
}