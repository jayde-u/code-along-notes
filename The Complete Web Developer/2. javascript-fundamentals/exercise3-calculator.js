
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNumber = prompt("Enter first number.");
var secondNumber = prompt("Enter second number.");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

var sum = firstNumber + secondNumber;
var subtract = firstNumber - secondNumber;
var multiply = firstNumber * secondNumber;
var divide = firstNumber / secondNumber;

alert("sum is " + sum + "\n subtract is " + subtract + "\n multiply is " + multiply + "\n  divide is " + divide);