var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes')
    ,routesSgp = require('../app/routes/sgpIndex.js');

app.use(bodyParser.json());

routes(app);
routesSgp(app);

module.exports = app;
