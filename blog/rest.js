var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

function respond2(req, res, next) {
    res.send(req.params.param);
    next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
server.get("/test/:param", respond2);
server.listen(8080);
