/*
It is a collection that store key value pair.
Where Key and Value can be of any data types.
*/


//Creation of MAP type 01

let myMap= new Map([
    //Key   , Value
    ['name','Rohit'],
    ['age',22],
    ['gender','Male'],
    [true,'Yes']
]);

console.log(myMap.get('name')) //Rohit

console.log(myMap.get('gender')) //Male

console.log(myMap.get('age')) //22