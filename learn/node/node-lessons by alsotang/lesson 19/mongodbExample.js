var MongoClient = require('mongodb').MongoClient;
var DB_CON_STR = 'mongodb://127.0.0.1:27017/white';


var insertData = function(db, callback){

	var collection = db.collection('info');
	var data = [
		{'name':'white','age':28},
		{'name':'quality','age':28},
		{'name':'wine','age':28},
		{'name':'winefan','age':28}
	]
	collection.insert(data, function(err, res){
		if(err){
			console.log('Error :' + err);
			return;
		}
		callback(res);
	})
}

MongoClient.connect(DB_CON_STR, function(err, db){
	insertData(db, function(result){
		db.close();
	})
})
