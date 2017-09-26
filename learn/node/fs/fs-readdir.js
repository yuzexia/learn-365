var fs = require('fs');


fs.readdir('file',function(err, files){
	if(err){console.log("Error:"+err);return;}

	files.forEach(function(file){
		console.log(file);
	})
})