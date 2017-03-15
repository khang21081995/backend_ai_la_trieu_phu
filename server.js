/**
 * Created by khang on 3/15/2017.
 */

/******************************** Mongo DB ***************************/
var mongoose = require('mongoose');
mongoose.connect('mongodb://KhangPQ:123456@ds045001.mlab.com:45001/ailatrieuphu');
//mongoose.connect('mongodb://localhost/techkids_testing_online');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.once('open', function () {
    console.log('DB connection success! ');
});

/******************************** Express App ************************/
var express = require("express");
var app = express();
require('./app')(app);

/******************************** HTTP Server ************************/
var http = require("http");
var server = http.createServer(app).listen(process.env.PORT || 8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
// var server = app.listen(process.env.PORT || 8888, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
// })