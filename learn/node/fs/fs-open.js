
var fs = require('fs');

console.log('准备打开文件');


// fs.open(path, flags[, mode], callback)
// path:文件的路径
// flags:打开文件的行为
// mode:设置文件模式(权限),文件创建默认权限为 0666(可读，可写)
// callback:  回调函数，带有两个参数如：callback(err, fd)
fs.open('input.text', 'r+', function (err, res) {
	if(err){
		console.log('Error:'+err);
		console.log('打开文件input.text失败');
		return;
	}
	console.log(res);
	console.log('打开文件input.text成功');
})

fs.open('input.texts', 'r+', function (err, res) {
	if(err){
		console.log('Error:'+err);
		console.log('打开文件input.texts失败');
		return;
	}
	console.log('打开文件input.texts成功');
})