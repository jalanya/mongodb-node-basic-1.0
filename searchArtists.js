var favorites = [
 {
  name: 'Love Song',
  id: '1'
 },
 {
  name: 'I Need Your Love',
  id: '2'
 }
];

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");
    db.collection('songs', function(err, collection) {
     var favoritesId = favorites.map(function(favorite){ return favorite.id; });
     var cursor = collection.find({ id: { $in: favoritesId }});
     cursor.each(function(index, value) {
       console.log(value);
     });
    });
  }
});
