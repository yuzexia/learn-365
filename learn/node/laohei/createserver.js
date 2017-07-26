
var http = require('http');

function create(req, res){
    console.log(req);

    var _str = '<h1>Hello yuze!</h1>';

    res.end(_str);
}

http.createServer(create).listen(8080);
