var fs = require('fs');


var data = 'www.yuzexia.com';
fs.writeFile('input.text',data, function (err) {
	// callback中只包含err参数
	if(err){
		console.log('Error:'+err);
		return;
	}
	console.log('文件写入成功');
	fs.readFile('input.text',function(err, rres){
		if(err){
			console.lo('Error:'+ err);
			return;
		}
		console.log(rres.toString());
	})
})