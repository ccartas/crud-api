import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private interceptTodoAction = new Subject<any>();
    private loggedUser = {
        username: '',
        password: '',
        role: 'guest'
    };
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

    authenticate(username, password){
       return new Promise((resolve, reject) => {
           if(username === 'admin' && password === 'P@ssw0rd'){
                this.loggedUser.username = username;
                this.loggedUser.password = password;
                this.loggedUser.role = 'admin';
                setTimeout(()=> resolve(this.loggedUser), 1500);
           } else if(username === 'guest' && password === 'guest'){
                this.loggedUser.username = username;
                this.loggedUser.password = password;
                setTimeout(()=> resolve(this.loggedUser), 1500);
           } else {
               reject(new Error('Invalid credentials'));
           }
       }) 
    }

    getLoggedUserRole(){
        return this.loggedUser.role;
    }
}