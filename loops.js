 
// for (let i = 1; i <= 10; i++) {
//     console.log("Number:", i)
// }

// For loops
// // loops through a block of code a number of times
// let cart = [1000, 2500, 1999, 2999]
// let total = 0;
// for (let i = 0; i < cart.length; i++) {
//     total += cart[i]; 
// }

// console.log(total);

// let laptops = ['Mac', 'HP', 'Lenovo', 'Asus'];
// for (let i = 0; i < laptops.length; i++) {
//     console.log(laptops[i]);
// }

// While loops
//  A while loop executes a certain block 
// of code as long as an expression evaluates to true. 
// let count = 1;

// while (count <= 10) {
//     console.log(count);
//     count++
// }

// let seconds = 5;

// while (seconds > 0 ) {
//     console.log('Time left :', seconds);
//     seconds --;
// }

// console.log("Time's up!");

// const timer = setInterval(() => {
//     console.log('Time left:', seconds); 
//     seconds--;


//   if (seconds === 0) {
//     clearInterval(timer);
//     console.log("Time's up!");
//   }
// }, 1000);

// do while loop
// It executes what is within the do block, and then after that it evaluates the while. If 
// the condition is true, it will execute what is in the do block again. It will continue to 
//  do so until the condition in the while changes to false
//  let correctPass = '12345';
//  let input;

do {
    input = prompt('Enter your password:' );
}  while(input !== correctPass) {
}
console.log('Access granted!')