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

// for (let i = 0; i < 101; i++) {
//   if (i % 3 === 0) {
//     console.log(i + " foo");
//   }
// }

// var game = 0;

// for (let i = 0; i < 101; i++) {
//   if (game == 291) {
//     break;
//   }
//   if (i % 2 === 0) {
//     game += 5;
//   } else {
//     game += 3;
//   }
//   if (game === 125) {
//     game = 25;
//   }

//   console.log(i, game);
// }

// var requiredCupsOfRice = 10;
// var currentCupsOfRice = 0;

// //write your code here

// while (currentCupsOfRice < requiredCupsOfRice) {
//   currentCupsOfRice += 1;
//   console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
// }
// console.log("We have enough rice!");

// for (var i = 0; i < x ; i++){
//     "code to be run"
// }

// x= 10
// for( var i = 0; i < x; i++){
//     console.log(i)
// }

// num = 2;

// for (var i = 0; i < 11; i++) {
//   console.log(num + " x " + i + " = " + num * i);
// }

// let countDown = 5

// while(countDown >0){
//     if (countDown > 10){
//         break;
//     }
//     console.log(countDown + "...")
//     countDown--
// }
// console.log("We have lift off!")

// let userNumber = 89;

// if (userNumber >= 1 && userNumber <= 100) {
//   while (userNumber <= 100) {
//     console.log(userNumber);
//     userNumber++;
//   }
// } else {
//   console.log("Your number was not between 1 and 100.");
// }

// userNumber = 70

// do{
//     console.log(userNumber)
//     userNumber +=6
// } while (userNumber <= 100)

// for (var i = 0; i < 101; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// for (var i =0; i< 10; i++){
//     console.log(i)
// }

// for (var i = 0; i < 10; i--) {

//     console.log(i);

//   }

// var letterGrade;
// var numericGrade = 10;

// if(numericGrade>= 90){
//     letterGrade = "A"
// } else if(numericGrade >=80){
//     letterGrade= "B"
// }else if(numericGrade >=70){
//     letterGrade= "C"
// }else if(numericGrade >=60){
//     letterGrade= "D"
// } else {
//     letterGrade = "F"
// }
// console.log(letterGrade)

// ############################################# WEEK 3 ##############################################
// ARRAYS
// always start at 0, use [] to mark an array

// let names = []

// names.push("Danielle", "Brandon")
// console.log(names)

// names.push("Leslie", "Lyra")
// console.log(names)

// console.log(names[1])

// for( let i=0; i <names.length; i++){
//     console.log(names[i])
// }

//FUNCTIONS
//modularized code,  reusable
//function keyword, the name of the function, parenthesis, curly braces

// function printZero(){
//     for(let i =0; i<101; i++){
//         console.log(i)
//     }
// }
// // have to declare the function

// printZero()

//  parameters allow you to add input into the function
// have functions only responsible for one thing, separation of concerns

// parameters are like parking spots and arguments are like cars, they go into parking spots

// function createFullName(firstName, lastName){
//     console.log(firstName+ " " + lastName)
// }

// createFullName("Tom", "Sawyer");

// Return Statements
//ends the function and returns what follows so it can be used
// like a vending machine, you put money in and get back something

// INTERMEDIATE ARRAY METHODS
// . map()- invokes a function on each element of the array and returns a new array with the result

//   let names = ["Brandon", "Danielle", "Helen", "Leslie"]

//   let lengths = names.map(function(element){
//       return element.length;
//   })

//   console.log(lengths)

//     // .reduce() -  takes all the value and reduces them down to one value, good for performing averages, returning objects, sum, ect

//     let sum = lengths.reduce(function(accumulator, currentValue){
//         // param 1 accumulates whatever was returned by the previous return
//         // param 2 is the current value
//         return accumulator + currentValue

//     })
//     console.log(sum)

//#################### WEEK 3 CLASS ###################################
// arrays
// let groceries = ["oat milk", "avocados", "eggs", "bread"];

// let arrayLength = groceries.length;
// // console.log(groceries[2]);
// // console.log(arrayLength);

// //loops
// for (let i = 0; i < groceries.length; i++) {
//   let displayNumber = i + 1;
//   console.log(displayNumber + ". " + groceries[i]);
// }

// groceries.push("coffee");
// console.log(groceries);

// check array for oranges, if no oranges add them, if oranges log " oranges present"

// for (let i = 0; i < groceries.length; i++) {
//   if (groceries[i] == "oranges") {
//     console.log("oranges are on the list already");
//   } else {
//     groceries.push("oranges");
//   }
// }

// console.log(groceries)

// console.log(groceries)
// let haveOranges = false

// for(let listItem of groceries){
//     if(listItem == "oranges"){
//         console.log("oranges are on the list")
//         haveOranges = true
//     }
// }

// if(haveOranges == false){
//     groceries.push("oranges")
// }

// console.log(groceries)

//functions

// function greeting(name){
//     console.log("hello "+ name)
// }

// greeting("danielle")

// create a function that takes in two numbers and returns the sum

// function addTogether(num1, num2) {
//   let num3 = num1 + num2;
//   return num3 / 2;
// }
// // when you return, the function call is replaced by the returned value
// console.log(addTogether(4, 4));

// find the sum of an array

// function sumOfArray(arrayOfNumbers) {
//   let sum = 0;
//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     sum += arrayOfNumbers[i];
//   }
//   return sum;
// }
// let numbers = [1,4,6,23,4,67,23];

// console.log(sumOfArray(numbers))

// console.log("hello".repeat(3))

// console.log("cheese".length)

// let dsfdf = [2, 5, 6, 7, 78 ]

// console.log(dsfdf[4])

// let groceryItems = ["apples", "cheese", "bread", "coffee"]

// for(let i=0; i <groceryItems.length; i++){
//     console.log(groceryItems[i])
// }

// function toThePower(base, exponent) {
//   return base ** exponent;
// }

// console.log(toThePower(6, 2));

// let customer = {
//   name: "Tom",

//   email: "Tom@promineotech.com",

//   phone: "602-123-0011",

//   // Insert your code below this line

//   printCustomerInformation: function(){
//       console.log("Name:" + this.name + ", Email:" + this.email + ", Phone:" + this.phone)
//   },

//   // Insert your code above this line
// };

// customer.printCustomerInformation()
//  let randomWords = ["blue", "pineapple", "bulgogi", "tree"]


// function findWord(arrayOfStrings, string){
//     return arrayOfStrings.indexOf(string)
// }

// console.log(findWord( randomWords, "bulgogi"))

// ############################################################################### WEEK 4 CLASS ##########################################################################################################

// Callbacks and promises are good for asynchronous things 
// console.log("i")

// setTimeout(() => {
//     console.log("eat")
// },2000)

// console.log("vegetables")

let stock = {
    fruit: ["blue berry", "apple", "bananas"],
    holder: ["cup", "waffle cone", "sugar cone"],
    toppings: ["fudge", "nuts", "caramel"]
}

//customer order
// fetch ingredients 
// start production
// serve ice cream


// callbacks 
// const order = (call_production) => {
//     console.log("order being processed, please call production")
//     call_production();
// }



// const production = () => {
//     console.log("production started")
    
// }

// order(production)

// promises 