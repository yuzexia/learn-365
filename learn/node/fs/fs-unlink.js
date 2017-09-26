var fs = require('fs');

fs.unlink('input.txt',function(err){
	if(err){console.log('Error:'+err);return;}
	console.log('input.txt已被删除');
})