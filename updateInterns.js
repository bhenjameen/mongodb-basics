var mongo = require('mongodb')

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/bhenjameen";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;

    var dbo = db.db("bhenjameen");

    var oldUpdate = {"movie": "The Banker", "year": "2020", "rating": 8};

    var newUpdate = { $set: {"movie": "Bleeding Steel", "year": "2017", "rating": 5.2}
    };

        dbo.collection("myMovies").updateOne(oldUpdate, newUpdate, function(err, res) {
            if (err) throw err
            console.log("1 document found and updated");

        db.close();
        });
});
