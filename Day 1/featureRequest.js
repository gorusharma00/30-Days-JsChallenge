// Feature Request 1

// comonly used data types
let price = 30;
let username = "Rakesh";
let isValid = true;
let map = {
    "a": 1,
    "b": 2,
}

let arr = [1, 2, 3, 4];  // array internally are objects in javascript

console.log(`price =>  value: ${price}, type: ${typeof price}`);
console.log(`username =>  value: ${username}, type: ${typeof username}`);
console.log(`isValid =>  value: ${isValid}, type: ${typeof isValid}`);
console.log(`map =>  value: ${map}, type: ${typeof map}`);
console.log(`arr =>  value: ${arr}, type: ${typeof arr}`);

// other data types

let speedOfLight = 299792458n;
const symbolValue = Symbol(30);

console.log(`speedOfLight => value: ${speedOfLight}, type: ${typeof speedOfLight}`);
console.log('symbolValue => value:', symbolValue, 'type:', typeof symbolValue);

// feature request 2

/*
The main difference between let and const is that let allows reassigning of 
values but variables with const cannot be reassigned 
once they are intialized and gives a type error  
*/

let userId = "123";
userId = "456"; // did not give any error

const color = "black";
//color = "red"  // will give type error
