var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');

module.exports = function(){
    var app = express();

    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());

    consign()
        .include('controllers')
        .then('infra')
        .into(app);

    return app;
}