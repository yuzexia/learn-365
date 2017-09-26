var fs = require('fs');
var buffer = new Buffer(1024);
// 截取文件
// fs.ftruncate(fd, len, callback)

fs.open('input.text', 'r+', function (err, fd) {
	if(err){console.log('Error:'+err);return;}

	console.log('读取文件成功！');
	console.log('准备截取内容');

	fs.ftruncate(fd, 10, function(err){
		if(err){console.log('Error:'+err);return;}

		console.log('文件截取成功!');

		fs.read(fd, buffer, 0, buffer.length, 0, function(err, byte, buff){
			if(err){console.log('Error:'+err);return;}

			console.log('内容长度：'+byte);
			console.log(buff.toString());

			fs.close(fd,function(err){
				if(err){console.log('Error:'+err);return;}
				console.log('文件成功关闭');
			})
		})
	})
})