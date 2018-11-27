import { Component } from "@angular/core";
import { TodoService } from "../common/services/todo.service";
import { Subscription } from "rxjs";
@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
    todoCounter: number = 0;
    doingCounter: number = 0;
    doneCounter: number = 0;
    teamPerformance: string = "0%";
    subscription: Subscription;

    constructor(private todoService: TodoService){
        this.subscription = this.todoService
                        .getAction().subscribe((action) =>{
                            switch(action){
                                case 'todo':
                                    this.todoCounter++;
                                    break;
                                case 'doing':
                                    this.todoCounter--;
                                    this.doingCounter++;
                                    break;
                                case 'done':
                                    this.doingCounter--;
                                    this.doneCounter++;
                                    break;
                            }
                            this.computeTeamPerformance();
                        })
    }

    ngDoCheck(){
        console.log('Called doCheck: OverviewCOmponent')
    }
    computeTeamPerformance(){
        console.log('Called');
        let total = this.todoCounter + this.doingCounter + this.doneCounter;
        if(total !== 0){
            this.teamPerformance = ((this.doneCounter / total) * 100).toFixed(2) + "%";
        } else {
            this.teamPerformance = "0%"
        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}