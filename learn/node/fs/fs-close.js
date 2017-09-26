var fs = require('fs');
var buffer = new Buffer(1024);

fs.open('input.text','r+',function(err, fd) {
	if(err){
		console.log('Error:'+err);
		return;
	}
	console.log('打开成功！');
	console.log('准备读取内容');
	fs.read(fd, buffer, 0, buffer.length, 0 ,function(err, byte, buff){
		if(err){console.log("Error:"+err);return;}

		console.log('文件内容长度：'+byte);
// fs.close(fd, callback)  fd为通过 fs.open() 方法返回的文件描述符
		fs.close(fd, function(err, cres){
			if(err){console.log("Error:"+err);return;}
			console.log('文件关闭成功!');
		})
	})
})