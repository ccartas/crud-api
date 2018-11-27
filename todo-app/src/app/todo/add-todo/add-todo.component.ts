<<<<<<< HEAD
import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/common/models/todo';
=======
import { Component, Input } from '@angular/core';
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
<<<<<<< HEAD

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
=======
    @Input() title: string;
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
}