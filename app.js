var bodyParser = require('body-parser');
var express = require("express");

module.exports = function (app) {
    app.use(express.static(__dirname + "/api"));
    app.use(express.static(__dirname + "/client"));

    app.use(bodyParser.json());
    app.get('/', function (req, res) {
        //res.end("Hello world");
        //Todo: Nhét file html làm màu vào
        res.sendFile(__dirname + "/" + "index.html");
    });
    // Insert routes below
    app.use('/api/question', require('./api/question'));
}