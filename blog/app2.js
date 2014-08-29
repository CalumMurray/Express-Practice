var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
    console.log("Got a request");
    response.end("Hello");
});

server.on('connection', function(socket) {
   console.log("Got connection");

});

server.listen(8001);