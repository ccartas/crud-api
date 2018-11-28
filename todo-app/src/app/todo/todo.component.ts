import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TodoService } from '../common/services/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit{
    addTaskTitle = "Add Task";
    todos = [];
    filterTodos = [];
    doing = [];
    done = [];
    oldValues: number;
    constructor(private todoService: TodoService,
                private changeDetector: ChangeDetectorRef){

    }

    ngOnInit(){
        console.log('Called OnInit: TodoComponent');
        this.todoService.getAllTodos().then((res: any) =>{
            this.todos = res;
            this.filterTodos = this.todos;
            if(this.oldValues !== this.todos.length){
                this.oldValues = this.todos.length;
                this.changeDetector.detectChanges();
            }
        }).catch((err) => {
            console.log(`We have an error: ${err}`);
        });
    }

    ngDoCheck(){
        console.log('Called doCheck: TodoComponent')
    }

    onTodoAdded(todoItem){
        console.log(todoItem);
        this.todos.push(todoItem);
    }

    onTodosFound(todos){
        this.filterTodos = todos;
    }

    onStatusChanged(element){
        switch(element.status){
            case 'doing':
                let todo = this.todos[element.index];
                this.todos.splice(element.index, 1);
                this.doing.push(todo);
                break;
            case 'done':
                todo = this.doing[element.index];
                this.doing.splice(element.index, 1);
                this.done.push(todo);
                break;
        }
    }
}