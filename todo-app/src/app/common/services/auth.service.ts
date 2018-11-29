import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TodoService } from './todo.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private router: Router,
                private todoService: TodoService){

                }

    canActivate(next: ActivatedRouteSnapshot,
            state: RouterStateSnapshot){
        if(this.todoService.getLoggedUserRole() === 'admin')
                return true;
        
        this.router.navigate(['unauthorized']);
        return false;
    }
}