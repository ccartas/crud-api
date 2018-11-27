import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/common/models/todo';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

    todo: Todo;
    @Output() toDoAdded: EventEmitter<Todo> = new EventEmitter();


    addTodo(taskName, priority, duration){
        this.todo = new Todo();
        this.todo.taskName = taskName.value;
        this.todo.priority = priority.value;
        this.todo.duration = duration.value;
        taskName.value = "";
        priority.value = "Priority";
        duration.value = 0;
        this.toDoAdded.emit(this.todo);
    }
}