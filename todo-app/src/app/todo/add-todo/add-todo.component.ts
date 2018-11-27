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

    todo: Todo;

    constructor(private todoService: TodoService){

    }

    ngDoCheck(){
        console.log('Called doCheck: AddTodoComponent')
    }

    addTodo(taskName, priority, duration){
        this.todo = new Todo();
        this.todo.taskName = taskName.value;
        this.todo.priority = priority.value;
        this.todo.duration = duration.value;
        this.todoService.addTodo(this.todo).then((res) =>{
            console.log(res);
        })
        taskName.value = "";
        priority.value = "Priority";
        duration.value = 0;
        
        this.todoService.sendAction('todo');
        this.todoAdded.emit(this.todo);
    }
}