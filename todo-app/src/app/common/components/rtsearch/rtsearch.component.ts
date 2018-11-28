import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-rtsearch',
    templateUrl: './rtsearch.component.html',
    styleUrls: ['./rtsearch.component.css']
})
export class RTSearchComponent implements OnInit {
    @Input() inputData;
    @Output() foundData: EventEmitter<any> = new EventEmitter();

    inputValue: FormControl = new FormControl();
    result;

    constructor(){
        this.inputValue.valueChanges.subscribe((value) => {
            this.result = this.realTimeSearch(value);
            this.foundData.emit(this.result);
        });
    }

    ngOnInit(){
        this.foundData.emit(this.inputData);
    }

    realTimeSearch(value) {
        if(value){
            return this.inputData.filter((element) => 
            Object.values(element).map((el) => {
             console.log(el);
             return el.toString();
            }).filter(el => el.includes(value)).length > 0);
        } else {
            return this.inputData;
        }
    }
}