var express = require('express');
var app = express();
var { route } = require('./routes/routes');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(route)

// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });

app.listen(3001, function () {
    console.log('Example app listening on port 3000!');
});