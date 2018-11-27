import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'change-todo',
    templateUrl: './change-todo.component.html',
    styleUrls: ['./change-todo.component.css']
})
export class ChangeTodoComponent {
    @Input() listType;
    @Output() statusChange: EventEmitter<string> = new EventEmitter();

    changeStatus(status){
        this.statusChange.emit(status);
    }
}