import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[lettersOnly]'
})
export class LettersOnlyDirective {
    
    constructor(private el : ElementRef){

    }

    @HostListener('keydown', ['$event'])
    handleInput(e){
        if(e.keyCode < 33 || e.keyCode > 64){
            return;
        }
        e.preventDefault();
    }
}