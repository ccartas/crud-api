import { Component } from '@angular/core';
<<<<<<< HEAD
import { Todo } from '../common/models/todo';
=======
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
<<<<<<< HEAD
    title = "Todo App";

    toDoTasks: Todo[] = []
    doing: Todo[] = [];
    done: Todo[] = [];

    onToDoAdded(todo){
    console.log(todo);  
    this.toDoTasks.push(todo); 
    }

    onStateChanged(value){
        console.log(value);
       switch(value.state){
           case 'doing':
                let todo = this.toDoTasks[value.index];
                this.toDoTasks.splice(value.index, 1);
                this.doing.push(todo);
                break;
            case 'done':
                let todo1 = this.doing[value.index];
                this.doing.splice(value.index, 1);
                this.done.push(todo1);
                break;
       } 
    }


=======
    addTaskTitle = "Add Task";
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
}