const
    fs = require('fs'),
    net = require('net'),
    server = net.createServer(function(conn) {
        console.log("connected");
        conn.write("now watching target.txt for changes");

        var watcher = fs.watch('target.txt', function() {
           conn.write("target.txt changed: " + Date.now());
        });

        conn.on('close', function() {
           console.log("connected closed");
           watcher.close();
        });
    });
server.listen(8888);