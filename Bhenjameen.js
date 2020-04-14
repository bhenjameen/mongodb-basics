var mongo = require('mongodb')

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/bhenjameen";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;

    console.log("Database created by Bhenjameen!");

    db.close();

});