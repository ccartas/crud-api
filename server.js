const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
let todos = []; 

app.get("/", (req, res) => {
    res.status(200).send("Express WEB API!");
});

app.get("/get-all-todos", (req, res) =>{
    res.status(200).send(todos);
});

app.post("/add-todo", (req, res) => {
    if(req.body){
        todo = {};
        todo.taskName = req.body.taskName;
        todo.priority = req.body.priority;
        todo.duration = req.body.duration;
        todo.isDone = false;
        todos.push(todo);
        res.status(200).send("Task added successfully");
    } else {
        res.status(500).send("Wrong body format!");
    }
});

app.put("/todo/:id/update", (req, res) =>{
    if(req.params.id < todos.length && req.params.id >= 0){
        todos.forEach((e, index) =>{
            if(index == req.params.id){
                e.isDone = !e.isDone;
                res.status(200)
                    .send(`${e.taskName} is done: ${e.isDone}`);
            }
        });
    } else {
        res.status(500).send("Invalid id!");
    }
});

app.delete("/todo/:id/delete", (req, res) =>{
    if(req.params.id < todos.length && req.params.id >= 0){
        let todo = todos[req.params.id];
        todos.splice(req.params.id, 1);
        res.status(200).send(`${todo.taskName} was deleted successfully!`);
    } else {
        res.status(500).send("Invalid id to delete!");
    }
});

app.listen(9099, ()=>{
    console.log('Server started on port 9099...');
});