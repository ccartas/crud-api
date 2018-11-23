const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const dbConnectionURL = "mongodb://localhost:27017";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname+"/dist/todo-app"));


app.get("/get-all-todos", (req, res) =>{
    mongoClient.connect(dbConnectionURL, (err, database) => {
        if(err) throw err;
        let db = database.db("taskAppDB");
        db.collection("tasks").find().toArray((err, result) =>{
            if(err) throw err;
            database.close();
            res.status(200).send(result);
        });
    });
});

app.post("/add-todo", (req, res) => {
    if(req.body){
        let todo = {};
        todo.taskName = req.body.taskName;
        todo.priority = req.body.priority;
        todo.duration = req.body.duration;
        todo.isDone = false;
        mongoClient.connect(dbConnectionURL, (err, database) => {
            if(err) throw err;
            let db = database.db("taskAppDB");
            db.collection("tasks").insertOne(todo, (err, result) =>{
                if(err) throw err;
                database.close();
                res.status(200).send("Task added successfully");  
            });
        });
    } else {
        res.status(500).send("Wrong body format!");
    }
});

app.put("/todo/update", (req, res) =>{
    mongoClient.connect(dbConnectionURL, (err, database) =>{
        if(err) throw err;
        let db = database.db('taskAppDB');
        let condition = { taskName: req.body.taskName }
        db.collection("tasks").updateOne(condition,
                {$set: {isDone: true}}, (err, result) => {
                    if(err) throw err;
                    database.close();
                    if(result.result.n !==0 && result.result.nModified !== 0){
                        res.status(200).send(result);
                    } else if(result.result.n !==0 && result.result.nModified === 0){
                        res.status(304).send("Task was not modified.");
                    } else {
                        res.status(500).send("Task not found to update.");
                    } 
                });
    });
});

app.delete("/todo/delete", (req, res) =>{
    mongoClient.connect(dbConnectionURL, (err, database) =>{
        if(err) throw err;
        let db = database.db("taskAppDB");
        let condition = { taskName: req.body.taskName };
        db.collection("tasks").deleteOne(condition,(err, result) =>{
            if(err) throw err;
            database.close();
            console.log(result);
            if(result.result.n !== 0){
                res.status(200).send(result);
            } else {
                res.status(500).send("Cannot find task to delete");
            }
            
        });
    });
});

app.listen(9099, ()=>{
    console.log('Server started on port 9099...');
});