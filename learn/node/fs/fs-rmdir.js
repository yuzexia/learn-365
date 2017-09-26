var fs = require('fs');

fs.rmdir('file/node', function(err,res){
	if(err){console.log('Error:'+err);return;}

	console.log(res);
	fs.readdir('file',function(err, files){
		if(err){console.log('Error:'+err);return;}
		files.forEach(function(file){
			console.log(file);
		})
	})
})