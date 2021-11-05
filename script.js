//Boolean Data: true of false , go along with if/then statements
// == equal
// === strictly equal (type matters)
// > grater
// < less
// && and
// || or
// >= greater/equal
// <= less/equal

// all evaluate to  true or false

// If Statements

// const costOfMilk = 4.99

// if( costOfMilk < 2){
//     console.log("buy two gallons")
// } else if(costOfMilk < 3) {
//     console.log("but only one gallon")
// } else{
//     console.log("not buying milk this week")
// }

//Switch Statement

// const grade = "F"

// switch (grade){
//     case "A":
//         console.log("range 90-100")
//         break;
//     case "B":
//         console.log("range 80-89")
//         break;
//     case "C":
//         console.log("range 70-79")
//         break;
//     case "D":
//         console.log("range 60-69")
//         break;
//     default:
//         console.log("range 0-69")
// }

//flattening: taking nested if statements and combining them using &&, but
//not if the second statement is going to determine a different path

// LOOPS
// while loop, for loop, do while loop

//USER INPUT
// using window.prompt

// const firstName = window.prompt("what is your name?")

// window.alert("hello " + firstName)

// OPEN CLASS QUESTIONS:
// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var monthNumber = 2

//Write your code here

// switch (monthNumber) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid Month");
// }

// if (num1 > num2) {
//   console.log(num1);
// } else if (num2 > num1) {
//   console.log(num2);
// } else {
//   console.log("same");
// }

//  const num1 =5
//  const num2 =6

// if (num1 === num2) {
//   console.log("Num1 is equal to Num2.");
// }

// Write a switch statement that checks the numberOfDay and prints the name of the day of the week.
// For example, if numberOfDay is 1, "Sunday" will be printed to the console.

// switch (numberOfDay) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("The number of day is invalid.");
// }

// Create an if/else if statement that checks myNumber against num1 and based on which condition evaluates to true,
//print the following messages:

// num1 + " is smaller than my number,"  + myNumber
//num1 + " is larger than my number, " + myNumber
// num1 + " is equal to my number, " + myNumber

// if (myNumber === num1) {
//   console.log(num1 + " is equal to my number, " + myNumber);
// } else if (myNumber > num1) {
//   console.log(num1 + " is smaller than my number," + myNumber);
// } else if (myNumber < num1) {
//   console.log(num1 + " is larger than my number, " + myNumber);
// }
