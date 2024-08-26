/*
Object's are built in complex datatypes  allow us to store data in a key value pair's.
It can store other object's , array , function and premitive datatype's also.
Object is dynamic in like we can add or modify whenever we want
*/

// Object creation type 01
let person={
    name:'ABC',
    age:22,
    gender:'M',
    greet:function greet(){
        console.log('Greeting from ',this.name);
    }
}

console.log(person.name);  //ABC

console.log(person.greet); //[Function: greet]

person.greet(); // Greeting from  ABC

// Object creation type 02

let person02 = new Object();
person02.name='Rohit'; 
person02.work='Student';
person02.greet=function(){
    console.log('Hello from ',person02.name)
}
console.log(person02.name); //Rohit
person02.greet(); //Hello from  Rohit
// Object creation type 03

function person03(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log('Hello from ',this.name);
    }
}

let p3 = new person03('rk',22);
console.log(p3.name); //rk
console.log(p3.age) //22
p3.greet() //Hello from  rk

//Best type of accessing Object 

console.log(p3['name']);//rk
p3['name']='Rohit';
console.log(p3['name']) //Rohit

//Adding and Deleting Properties 

p3.job='Student';
console.log(p3['job']); //Student

delete p3.job
console.log(p3) //person03 { name: 'Rohit', age: 22, greet: [Function (anonymous)] }