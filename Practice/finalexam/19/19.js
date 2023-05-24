const express = require('express');
const path = require('path');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', function (request, response) {
    response.render('j', {message: 'I enjoy life' });
});
var server = app.listen (3000, function () {
    console.log('Server is running..');
});