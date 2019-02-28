// server.js

// load dependencies
var express = require('express');
var app = express();

// assign ejs as view engine
app.set('view engine', 'ejs');

// load vew files

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.info('App started: listening on port 8080');