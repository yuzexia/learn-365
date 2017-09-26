var fs = require('fs');
var buffer = new Buffer(1024);

//fs.read(fd, buffer, offset, length, position, callback)

fs.open('input.text','r+',function(err, fd){
	if(err){
		console.log('Error:'+err);
		return;
	}
	console.log(fd);
	fs.read(fd, buffer, 0, buffer.length, 0, function(err, byte, buff){
		if(err){
			console.log('Error:'+err);
			return;
		}
		console.log('byte:'+byte);
		console.log(buff.toString());
	})
})