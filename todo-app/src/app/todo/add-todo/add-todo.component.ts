import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/common/models/todo';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

    @Input() title: string;
    @Output() todoAdded: EventEmitter<Todo> = new EventEmitter();

    todo: Todo;

    addTodo(taskName, priority, duration){
        this.todo = new Todo();
        this.todo.taskName = taskName.value;
        this.todo.priority = priority.value;
        this.todo.duration = duration.value;
        taskName.value = "";
        priority.value = "Priority";
        duration.value = 0;
        this.todoAdded.emit(this.todo);
    }
}