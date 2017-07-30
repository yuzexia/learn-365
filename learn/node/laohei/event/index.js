let events = require('events'),
    http = require('http');

let server = http.createServer();

let ev = new events.EventEmitter();

console.log(events.EventEmitter.prototype);

ev.on('a', () => {
    console.log('a');
})

ev.on('b', () => {
    console.log('b');
})

setTimeout(()=>{
    ev.emit('a');
    ev.emit('b');
},2000)



