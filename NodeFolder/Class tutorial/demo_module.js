var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    console.log(req)
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(3000, localhost, ()=>{
    console.log("Server Listening on port " + 3000)
});