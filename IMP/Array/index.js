//Arrays in javascript are mutable and can store diffrent type's of data
//Index start from zero
//This arrays are dynamic means it can grow it's size and also it can shrink it's size

//Array Creation of type 01
let arr01=[1,2,'Hello',true,10.04];
console.log(arr01); //[ 1, 2, 'Hello', true, 10.04 ]
//Array Creation of type 02
let arro02= new Array('Apple','Banana',true,2300,233.002);
console.log(arro02);//[ 'Apple', 'Banana', true, 2300, 233.002 ]

//Accesing array element's
console.log(arr01[2]);//Hello

//Printing array element's one by one 
arro02.forEach(element => {
    console.log(element+" ,");
/*
Hello
Aple ,
Banana ,
true ,
2300 ,
233.002 ,
*/
});

// function of arrays
let arr=[1,2,'Hello',true,10.04,344];

// add one or more element's at the end 
arr.push('end insertion 01','end insertion 02'); //[ 1, 2, 'Hello', true, 10.04, 344, 'end insertion','end insertion 02' ]
console.log(arr);

//Remove the last element from the array
arr.pop()
console.log(arr); //[ 1, 2, 'Hello', true, 10.04, 344, 'end insertion 01' ]

//Remove first element from the array
arr.shift()
console.log(arr); //[ 2, 'Hello', true, 10.04, 344 , 'end insertion 01']

//Adding one or more element's to the start of the array
arr.unshift('00',1); //[ '00', 1, 2, 'Hello', true, 10.04, 344, 'end insertion 01' ]
console.log(arr);

//Adds or remove element from the specific index in an array
//index,deletionIndex,Element
// arr.splice(2,'','Hi'); //[ '00', 1, 'Hi', 2, 'Hello', true, 10.04, 344, 'end insertion 01' ]
arr.splice(2,2,'Hi'); //[ '00', 1, 'Hi', true, 10.04, 344, 'end insertion 01' ]
console.log(arr);

//Return a new Array from the specific index
            //Start,end
console.log(arr.slice(2,)); //[ 'Hi', true, 10.04, 344, 'end insertion 01' ]

// Checking array length using built in function

console.log(`Array length is :`,arr.length);  //Array length is : 7