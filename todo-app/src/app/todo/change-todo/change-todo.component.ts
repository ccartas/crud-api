import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'change-todo',
    templateUrl: './change-todo.component.html',
    styleUrls: ['./change-todo.component.css']
})
export class ChangeTodoComponent {
    @Input() listType:string;
    @Output() statusClick: EventEmitter<string> = new EventEmitter();

    changeStatus(status){
        this.statusClick.emit(status);
    }
}