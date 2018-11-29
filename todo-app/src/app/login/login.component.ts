import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../common/services/todo.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username: string;
    password: string;

    constructor(private router: Router,
                private todoService: TodoService){

    }

    login(){
        this.todoService.authenticate(this.username, 
                this.password).then((loggedUser) =>{
                    this.router.navigate(['home']);
                }).catch((err) =>{
                    console.log(err);
                });
        
    }
}