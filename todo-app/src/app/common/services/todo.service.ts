import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private interceptTodoAction = new Subject<any>();
    
    constructor(private httpClient: HttpClient){

    }

    sendAction(action){
        this.interceptTodoAction.next(action);
    }

    getAction(){
        return this.interceptTodoAction.asObservable();
    }

    addTodo(todo){
        return this.httpClient.post('http://localhost:9099/add-todo',
                            todo, {responseType: 'text'}).toPromise();
    }

    getAllTodos(){
        return this.httpClient.get('http://localhost:9099/get-all-todos').toPromise();
    }
}