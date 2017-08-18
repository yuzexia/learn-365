var benchmark = require('benchmark');

var suite = new benchmark.Suite();

var int1 = function (str) {
    return +str;
};
var int2 = function (str) {
    return parseInt(str, 10);
};
var int3 = function (str) {
    return Number(str);
};

var number = '100';

//add tests
suite
    .add('+', () => {
        int1(number);
    })
    .add('parseInt', () => {
        int2(number);
    })
    .add('Number', () => {
        int3(number);
    })
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log('Fastest is' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});


