var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');
var expressvalidator = require('express-validator');

module.exports = function(){
    var app = express();

    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());
    app.use(expressvalidator());

    consign()
        .include('controllers')
        .then('infra')
        .then('servicos')
        .into(app);

    return app;
}