//Find documents in the myMovies collection with only the first document showing
function firstDocument() {
    var mongo = require('mongodb')

    var MongoClient = require('mongodb').MongoClient;

    var url = "mongodb://localhost:27017/bhenjameen";

    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;

        var dbo = db.db('bhenjameen');

        var cursor = dbo.collection('myMovies').findOne({}, function(err, res) {
        if (err) throw err;
            console.log(res);
            db.close();
        });
    });
}


//Find documents in the myMovies collection with ratings of 7
function rating() {
    var mongo = require('mongodb')

    var MongoClient = require('mongodb').MongoClient;

    var url = "mongodb://localhost:27017/bhenjameen";

    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;

        var dbo = db.db('bhenjameen');

        var cursor = dbo.collection('myMovies').find({rating: 7});
        
        cursor.each(function(err, res) {
        if (err) throw err;
            console.log(res);
            db.close();

        });
    });
}


//Find documents in the myMovies collection with only movie titles showing and nothing else
function movieTitles() {
    var mongo = require('mongodb')

    var MongoClient = require('mongodb').MongoClient;

    var url = "mongodb://localhost:27017/bhenjameen";

    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;

        var dbo = db.db('bhenjameen');

        var cursor = dbo.collection('myMovies').find({}).project({_id:0, movie:1});
        
        cursor.each(function(err, res) {
        if (err) throw err;
            console.log(res);
            db.close();

        });
    });
}


function findInterns(){
    firstDocument();
    rating();
    movieTitles();
}

findInterns();