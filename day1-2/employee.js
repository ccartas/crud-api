import { Person } from "./person.js";

export class Employee extends Person {
    constructor(name, salary, position){
        super(name);
        this.salary = salary;
        this.position = position;
    }

    set setSalary(salary){
        this.salary = salary;
    }

    get getSalary(){
        return this.salary;
    }

    set setPosition(position){
        this.position = position;
    }

    get getPosition(){
        return this.position;
    }

    getInfo(){
        return `${super.getInfo()}, are functia de: ${this.position} si salariul de: ${this.salary}`;
    }

    bonus(){
        let bonus = Math.round(Math.random() * 1000);
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(this.salary + bonus);
            }, 1000);
        })
    }
}

