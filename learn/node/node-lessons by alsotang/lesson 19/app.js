

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

var insertData = function(db, callback){
    // 链接到表site
    var collection = db.collection('site');
    var data = [
        {'name':'white','url':'http://www.white.com'},
        {'name':'quality','url':'http://www.quality.com'}
    ]

    collection.insert(data, function(err, result){
        if(err) {
            console.log('Error:'+err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR,function(err, db){
    console.log('链接成功');
    insertData(db, function(result){
        console.log(result);
        db.close();
    })
})