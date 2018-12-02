mongoClient.connect(dbURL,{useNewUrlParser: true}, (err, database) =>{
    if(err) throw err;
    let db = database.db("taskAppDB");
    db.collection('tasks').insertOne(todo, (err, result) =>{
        if(err) throw err;
        database.close();
    })  
});

mongoClient.connect(connectionURL, (err, database) =>{
    let db = database.db("taskAppDB");
    db.collection("tasks").find().toArray((err, result) =>{
        res.status(200).send(result);
    });
    database.close();  
});

mongoClient.connect(connectionURL, (err, database) =>{
    let db = database.db("taskAppDB");
    db.collection("tasks").updateOne({taskName: req.body.taskName}, {$set: {isDone: true}},(err, result) =>{
        res.send(result);
    })
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });