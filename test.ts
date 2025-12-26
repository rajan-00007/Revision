/* INTERFACE */


/* interface Person{
    name:string;
    age:number
}
let rajan: Person = {
    name:"Rajan",
    age:22
}

console.log(rajan) */

/* interface Student{
    name:string;
    mobile:number
    email?:string;
}

let student1: Student = {
    name:"Rajan",
    mobile:22565656,
    email:"test"
}

let student2: Student = {
    name:"Rajan",
    mobile:22565656,
}

console.log("Student 1:",student1)
console.log("Student 2:",student2) */

/* interface Person {
  readonly name: string;
  age: number;
}

let rajan: Person = {
  name: "Rajan",
  age: 22
};

rajan.age = 23;       
rajan.name = "Amit";  */

/* interface Address{
    state:String
}

interface Address{
    city:String
}

interface Address{
    pin:number
}

let address1: Address={
    state:"Uttar pradesh",
    city:"Lucknow",
    pin:123456
}

console.log(address1) 

*/

/* 
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const empployee1: Employee = {
  name: "Rajan",
  salary: 30000
};

const person1: Person ={
 name:"Rajan"
// salary: 30000
}

console.log(empployee1.name);
console.log(empployee1.salary);
console.log(person1)

 */



/* TYPE */

/* 
type AlphaNumeric = string | number;

let id:AlphaNumeric = 123456789

console.log(id)

let id2:AlphaNumeric = "qwertyuio"

console.log(id2) 

*/



/* type Person ={
   name:string;
    age:number
    email?:string;
}

let person1: Person = {
    name:"Rajan",
    age:22,
    email:"qwertyuiop"
}

let person2: Person = {
    name:"USer 2",
    age:22,
}

console.log(person1)

console.log(person2) 

*/


/* 
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};

const emp: Employee = {
  name: "Rajan",
  salary: 30000
};

console.log(emp.name);
console.log(emp.salary);

 */



/* CLASSES */


/* class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }
}


const person1 = new Person("Rajan", 22);

console.log(person1.greet());
console.log(person1.isAdult()); */


/*  Public and private */

/* class Person {
 public name: string;
 private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }
}

const person1 = new Person("Rajan", 22);

console.log(person1.name)
console.log(person1.age) //error */


/* Protected */

/* 
class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }

}

class Child extends Parent {

    constructor(some:string) {
        super(some);
        
    }
    introduction() {
        console.log(`My Family name is ${this.familyName}`)
    }
}

const child = new Child("Verma")

child.introduction() 

 */

