import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
    @Input() title: string;
    @Input() listType;
    @Input() source;
    @Output() changeStatus: EventEmitter<any> = new EventEmitter();
    elementIndex: number = -1;

    ngOnChanges() {
        console.log('Called OnChanges: TodoListComponent')
    }

    ngOnInit(){
        console.log('Called OnInit: TodoListComponent');
    }

    ngDoCheck(){
        console.log('Called doCheck: TodoListComponent')
    }
    

    todoClicked(index){
        this.elementIndex = index;
    }

    onStatusChanged(status){
        let temp = {
            index: this.elementIndex,
            status: status
        };
        this.changeStatus.emit(temp);
        this.elementIndex = -1;
    }

    cutElement(){
        let style = {
            'text-decoration': this.listType==='done' ? 'line-through' : 'none'
        }
        return style;
    }
}