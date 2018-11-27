import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
    addTaskTitle = "Add Task";

    todos = [];
    doing = [];
    done = [];

    ngOnInit(){
        console.log('Called OnInit: TodoComponent');
    }

    ngDoCheck(){
        console.log('Called doCheck: TodoComponent')
    }

    onTodoAdded(todoItem){
        this.todos.push(todoItem);
    }

    onStatusChanged(element){
        switch(element.status){
            case 'doing':
                let todo = this.todos[element.index];
                this.todos.splice(element.index, 1);
                this.doing.push(todo);
                break;
            case 'done':
                todo = this.doing[element.index];
                this.doing.splice(element.index, 1);
                this.done.push(todo);
                break;
        }
    }
}