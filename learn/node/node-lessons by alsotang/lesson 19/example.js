var mongoClient = require('mongodb').MongoClient;
var db_config = 'mongodb://localhost:27017/conapp';

var insertData = function(db_config,callback){
var collection = db_config.collection('users');
var data = [{'username':'ddaaaa'}];
collection.insert(data,function(err,result){
    if (err) {
        console.log(err);
        return;
    };
    callback(result);
})
}
 mongoClient.connect(db_config,function(err,db_config){

 insertData(db_config,function(result){
    console.log(result);
    db_config.close();
 })

})