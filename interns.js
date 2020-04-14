var mongo = require('mongodb')

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/bhenjameen";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;

    var dbo = db.db('bhenjameen');

    var movRev = ([{movie: "The Banker", year: "2020", rating: 8},  {movie: "Bad Boys", year: "2020", rating: 7}, {movie: "The Hunt", year: "2020", rating: 7}, {movie: "Bloodshot", year: "2020", rating: 7.5}, {movie: "First Cow", year: "2020", rating: 6.5}]);
    
    dbo.collection('myMovies').insertMany(movRev, function (err, res){
        if (err) throw err;

        console.log("myMovies collection created and " + res.insertedCount + " document successfully added")

        db.close();
    });
});

