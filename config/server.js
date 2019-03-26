var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var connection = require('../config/dbConnection');

var app = express();
connection();

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

consign()
    .include('/app/controller')
    .then('/app/route')
    .into(app);

module.exports = app;