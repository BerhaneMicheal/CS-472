const express = require('express');
const app = express();

app.post('/data', function (req, res) {
  res.send('Wiki data is posted');
});

app.get('/', function (req, res) {
  res.send('Wiki home');
});

app.get('/docs', function (req, res) {
  res.send('Documentation for this wiki');
});

var server = app.listen(3000, function () {
  console.log('Server is running...');
});
