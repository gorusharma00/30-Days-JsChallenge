// Activity 1 => Arithmetic Operations

let num1 = 10;
let num2 = 30;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);


// Acitivty 2 => Assignment Operators

num1 += 30
console.log(num1);

num2 -= 20;
console.log(num2);

// Activity 3 => Comparison Operators

let low = 20;
let high = 50;

console.log("Is low is lesser than high:", low < high);
console.log("Is low is greater than high:", low > high);

low = 50;
high = 50;

console.log("Is low is lesser than or equal to high:", low <= high);
console.log("Is low is greater than or equal to high:", low >= high);

low = '50';
high = 50;

console.log("Is both are equal with abstract equality:", low == high); // gives true because abstract equality
console.log("Is both are euqal with strict equality:", low === high);


// Activity 4 => Logical Operators
const key1 = 60;
const key2 = 100;

console.log(key1 > 50 && key2 > key1);
console.log(key1 < key2 || key2 > 100);
console.log(key1 !== key2);


// Activity 5 => Ternary Operator

const number = -100;

number > 0 ? console.log('Number is positive') : console.log('Number is negative')