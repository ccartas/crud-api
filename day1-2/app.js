import {Employee} from './employee.js';
import {Employees} from './employees.js';


var emp1 = new Employee("Gigel", 1000, "CEO");
var emp2 = new Employee("Ana", 1500, "COO");
var emp3 = new Employee();
emp3.setName = "Popel";
emp3.setSalary = 2000;
emp3.setPosition = "CTO";
console.log(emp1.getInfo());
console.log(emp2.getInfo());
console.log(emp3.getInfo());

Employees.add(emp1);
Employees.add(emp2);
Employees.add(emp3);

var employees = Employees.list();

var container = document.getElementById('content');
var content = '';
for(let e of employees){
    content += e.getInfo() + "</br>";
}
content += Employees.averageSalary() + "</br>";
container.innerHTML = content;

emp1.bonus().then((bonus) => {
    console.log(bonus);
});

