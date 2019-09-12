var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/profile');
var db = mongoose.connection;

app.listen(3000);
console.log('Running on port 3000');