sendControllers = (req, res) => {
    console.log("estoy en send controllers");

    res.json({
        "controllers": [
            { "id": "0", "name": "Clavícula derecha", "type": "hand" },
            { "id": "1", "name": "Clavícula izquierda", "type": "hand" },
            { "id": "2", "name": "Hombro derecho", "type": "hand" },
            { "id": "3", "name": "Muñeca derecha", "type": "hand" },
            { "id": "4", "name": "Hombro izuierdo", "type": "hand" },
            { "id": "5", "name": "Muñeca Izquierda", "type": "hand" },
        ]
    })
}
module.exports = {
    sendControllers
}