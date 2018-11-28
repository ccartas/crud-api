import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/common/services/todo.service';

@Component({
    selector: 'change-todo',
    templateUrl: './change-todo.component.html',
    styleUrls: ['./change-todo.component.css']
})
export class ChangeTodoComponent {
    @Input() listType;
    @Output() statusChange: EventEmitter<string> = new EventEmitter();

    constructor(private todoService: TodoService){

    }

    ngDoCheck(){
        console.log('Called doCheck: ChangeTodoComponent')
    }

    changeStatus(status){
        this.todoService.sendAction(status);
        this.statusChange.emit(status);
    }
}