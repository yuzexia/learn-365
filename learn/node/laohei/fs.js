


var fs = require('fs');

fs.readFile('a.txt', (err, data) => {
    console.log(data)
})

fs.open('a.txt', (err, data) => {
    console.log(data)
})
