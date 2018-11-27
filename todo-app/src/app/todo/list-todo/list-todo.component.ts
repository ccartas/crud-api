import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './list-todo.component.html',
    styleUrls: ['./list-todo.component.css']
})
export class TodoListComponent {
    @Input() listTitle: string;
    @Input() listType: string;
    @Input() todos;
    @Output() stateChange: EventEmitter<any> = new EventEmitter();
    
    index;

   

    onStatusClicked(state){
        let temp = {
            'state': state,
            'index': this.index
        };
        console.log(temp);
        this.stateChange.emit(temp);
        this.index = -1;
    }

    sliceText(){
        let style = {
            'text-decoration': this.listType === 'done' ? 'line-through' : 'none'
        }
        return style;
    }
}