
let employees = []; // Array literals

export class Employees {

    static add(employee){
        employees.push(employee);
    }

    static list(){
        return employees;
    }

    static averageSalary(){
        return employees.map(e => e.salary)
                .reduce((total, current) => total += current)/employees.length;
    }
}