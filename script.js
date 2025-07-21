console.log('Hello, World!');
let firstName = 'John';
console.log(`My name is ${firstName}.`);
let message = " My name is " + firstName + ".";
console.log(message);
// let age = '20';
// let age2 = parseInt(age);
// console.log(typeof age2)
console.log(firstName.length);
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// Numbers
let num = 10;
console.log(num)

console.log(5 / 0);
console.log(-5 / 0);

console.log('Hi' / 2);
console.log(Math.sqrt(-1));

let largeNumber = 887775848857464756577n;
console.log(largeNumber);
let lNumber = BigInt("887775848857464756577");
console.log(lNumber);
console.log(largeNumber + lNumber);
console.log(largeNumber * lNumber);

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(Math.sqrt(16));
console.log(Math.floor(16.9));
console.log(Math.ceil(16.1));
console.log(Math.round(16.45665656));

let x = 16.45665656;
let newX = x.toFixed(2);
console.log(x, newX);

const radius = 5;
const height = 12;

const volume = Math.PI * (radius ** 2) * height;
const volume2 = Math.PI * Math.pow(radius, 2) * height;

console.log(volume.toFixed(2));
console.log(volume2.toFixed(2));

let isLoggedIn = true;
let hasPermission = false;

// Undefined
let lastName; 
console.log(lastName);
console.log(typeof lastName);

// null 
// let gender = null;
// console.log(typeof gender);

let name = 'John';
let age = 30;
let isStudent = 'true';
let gender = 'male';

let person = {
    name: 'John',
    age: 30,
    isStudent: true,
    gender: 'male',
    address: {
        city: 'Nairobi',
        street: 'Mpaka Road',
    },
};

console.log(person.age);
console.log(person.address.city);
console.log(person['gender']);

