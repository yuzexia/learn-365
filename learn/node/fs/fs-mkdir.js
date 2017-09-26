var fs = require('fs');
//fs.mkdir(path[, mode], callback)
// 创建目录/file/node

fs.mkdir("file/node",0777,function(err){
	if(err){console.log('Error:'+err);return;};
	console.log('创建目录:/file/node 成功！');
});
fs.mkdir("file/node2",0777,function(err){
	if(err){console.log('Error:'+err);return;};
	console.log('创建目录:/file/node 成功！');
})
fs.mkdir("file/node3",0777,function(err){
	if(err){console.log('Error:'+err);return;};
	console.log('创建目录:/file/node 成功！');
})
fs.mkdir("file/node4",0777,function(err){
	if(err){console.log('Error:'+err);return;};
	console.log('创建目录:/file/node 成功！');
})
