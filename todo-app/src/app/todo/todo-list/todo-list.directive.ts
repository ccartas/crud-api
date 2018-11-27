import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[itemColor]'
})
export class TodoLabelDirective implements OnInit{

    @Input() elementType: string;
    @Input() bgColor: string;
    @Input() textColor: string;

    constructor(private el: ElementRef){

    }

    ngOnInit(){
        this.customizeColors(this.bgColor, this.textColor)
        /*switch(this.elementType){
            case 'todo':
                this.el.nativeElement.style.background = "red";
                this.el.nativeElement.style.color = "#fff";
                break;
            case 'doing':
                this.el.nativeElement.style.background = "blue";
                this.el.nativeElement.style.color = "#fff";
                break;
            case 'done':
                this.el.nativeElement.style.background = "green";
                this.el.nativeElement.style.color = "#fff";
                break;
        } */
    }

    customizeColors(bgColor, textColor){
        this.el.nativeElement.style.background = bgColor;
                this.el.nativeElement.style.color = textColor;
    }
}