// Conditional Statements
// if (condition) {
// block of code to be executed
// }

let age = 24;
let hasID = true;
let isRegistered;

if (age >= 18) {
    if (hasID = true) {
        if (isRegistered = false) {
            console.log('You are eligible to vote.');
        } else {
            console.log('You are not eligible to vote.');
        } 

    } else {
        console.log("You don't have an ID.");
    }
} else {
   console.log('You are not eligible to vote')
} 

for (let i=0; i<5; i++ ) {
    console.log("Hello World")
};

// let i = 1;
// while(i <= 10) {
//     console.log("Number:", i);
// }

let i = 0 
do {
    console.log("Number:", i);

} while ( i < 20);

// Functions
function functionName(parameters) {

};// This is the formula for declaration / experession


function sayHello(name){
    return ('Hello {$name}') 
}

console.log(sayHello);