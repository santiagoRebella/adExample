"use strict";

let bodyParser = require('body-parser'),
    express = require('express'),
    server = express(),
    gutil = require('gulp-util'),
    PORT = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.json());

server.use(express.static(__dirname + '/bin'));

server.listen(PORT, function () {
  gutil.log(gutil.colors.gray('server listening on port ' + gutil.colors.green(PORT)));
});