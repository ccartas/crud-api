import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/common/models/todo';
import { TodoService } from 'src/app/common/services/todo.service';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

    @Input() title: string;
    @Output() todoAdded: EventEmitter<Todo> = new EventEmitter();
    taskName:string = '';
    priority: string = 'Priority';
    duration: number = 0;

    constructor(private todoService: TodoService){

    }

    ngDoCheck(){
        console.log('Called doCheck: AddTodoComponent')
    }

    addTodo(){
        let todo: Todo = new Todo();
        todo.taskName = this.taskName;
        todo.priority = this.priority;
        todo.duration = this.duration;
        this.todoService.addTodo(todo).then((res) =>{
            console.log(res);
        })
        this.todoService.sendAction('todo');
        this.todoAdded.emit(todo);
        this.clearFields();
    }

    clearFields(){
        this.taskName = '';
        this.priority = 'Priority';
        this.duration = 0;
    }
}