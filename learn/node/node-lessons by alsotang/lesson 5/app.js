
var async = require('async');

var concurrencyCount = 0;
var fetchUrl = (url, callback) => {
    // delay 的值在2000以内，是个随机的整数
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log('现在的并发数量为：', concurrencyCount, '，正在捉取的是', url, '，耗时' + delay + '毫秒');
    setTimeout(() => {
        concurrencyCount--;
        callback(null, url+'html content');
    },delay);
};

var urls = [];
for(let i = 0; i < 30; i++){
    urls.push('http://datasource_' + i);
}

async.mapLimit(urls, 5 , (url, callback) => {
    fetchUrl(url, callback);
}, (err, result) => {
    console.log('final:');
    console.log(result);
})