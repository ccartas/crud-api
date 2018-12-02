export class Person {

    constructor(name){
        this.name = name;
    }

    set setName(name){
        if(name.length >= 3){
            this.name = name;
        } else {
            throw new Error('Numele persoanei trebuie sa contina minim 3 caractere');
        }
        
    }

    get getName(){
        return this.name;
    }

    getInfo(){
        return `Numele persoanei este: ${this.name}`;
    }
}