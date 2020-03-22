var express = require('express');
var app = express();
var { route } = require('./routes/routes');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// headers configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});



app.use(route)


app.listen(3001, function() {
    console.log('Example app listening on port 3000!');
});