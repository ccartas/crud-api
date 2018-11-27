import { Component } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    addTaskTitle = "Add Task";

    todos = [];
    doing = [];
    done = [];

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