import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'lazy-view',
    templateUrl: './lazy.component.html',
    styleUrls: ['./lazy.component.css']
})
export class LazyComponent {

    constructor(private router: Router){

    }

    goToFirst(){
        this.router.navigate(['/lazy/first'])
    }
}