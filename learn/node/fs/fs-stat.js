
var fs = require('fs');

fs.stat('input.text',function (err, stats) {
	if(err){
		console.log("Error:"+err);
	}
	console.log(stats);
	console.log(stats.isFile());  //是否为文件
	console.log(stats.isDirectory());  // 是否为目录
	console.log(stats.isBlockDevice());  //是否为块设备
	console.log(stats.isCharacterDevice());  //是否为字符设备
	console.log(stats.isSymbolicLink());  //是否为软连接
	console.log(stats.isFIFO());  //是否为FIFO,FIFO是UNIX中的一种特殊类型的命令管道。 
	console.log(stats.isSocket());  //是否为socket
})