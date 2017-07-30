

let http = require('http');
let fs = require('fs');


http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'image/jpg'
    });

    let stream = fs.createReadStream('demo.jpg');

    stream.on('data', (data) => {
        console.log("----数据读取中----");
        res.write(data);
    });

    stream.on('end', () => {
        res.end();
    });

}).listen(3000);