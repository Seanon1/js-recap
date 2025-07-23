// function functionName(parameter1, parameter2) {
//          return result // optional
// }

function greet(name) {
    // Use backticks instead of single quotes
    console.log(`Hello ${name}`); 
}

greet('Jane');
// Expected Output: Hello Jane

function greeting(name) {
    // Use backticks instead of single quotes
    return `Hello ${name}`; 
}

console.log(greet('John'));
// Expected Output: Hello John

// hoisted
function sumOfNumbers(num1, num2) {
    return num1 + num2;
}

const sum = sumOfNumbers(4, 5);
console.log(sum);

const calculateArea = function(width, height) {
    return width * height;
}

let area = calculateArea(10, 6);
console.log(area)

const square_long = function(x) {
    return x * x;
}

const squareOfNumbers = x => x * x;
console.log(squareOfNumbers(6));

const products = [
    {name:'Laptop', price: 100000, quantity: 20}
]