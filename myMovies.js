var mongo = require('mongodb')

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/bhenjameen";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;

    var dbo = db.db("bhenjameen");
    dbo.createCollection("myMovies", function(err, res) {
        if (err) throw err;
        console.log("myMovies collection successfully created!");
        db.close();
    });
});

