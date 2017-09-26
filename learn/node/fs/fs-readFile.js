var fs = require('fs');

// async读取
fs.readFile('input.text', function(err, res) {
	if (err) {
		console.log('Error:' + err);
		return ;
	}
	console.log('异步读取：' + res.toString());
})

// sync读取
var data = fs.readFileSync('input.text');
console.log('同步读取：' + data.toString());