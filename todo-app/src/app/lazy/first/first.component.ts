import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'first-view',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent {

    constructor(private router: Router){

    }

    goToSecond(){
        this.router.navigate(['lazy/first', {
            outlets: {
                'special' : ['']
            }
        }]);
    }

    goToThird(){
        this.router.navigate(['lazy/first', { outlets : { 'special': ['third'] } }]);
    }
}