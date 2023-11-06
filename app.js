                                               //ASSIGNMENT 1
                                               //question 1

// let userInput = prompt("Enter a number:");

// let number = parseInt(userInput);

// if (number) {
//     console.log("Number is divisible by 3");
// } 
// else {
//     console.log("Number is not divisible by 3");
// }

                                                  //question 2

// let userValue = prompt() 'R' 
// var userInput = prompt("Enter a number:");

// var number = parseInt(userInput);

// if (!isNaN(number)) {
//   if (number % 2 === 0) {
       
//         alert(number + " is an even number.");
//   } else {
//         alert(number + " is an odd number.");
//   }
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }

                                                        //question 3

// let age = prompt('Enter your age ')

// if (age<18 && age<=18){
//     document.write('Too young')
  
// }else {
//     document.write('Old enough')
// }

                                                    // Question 4

// let userName =prompt("Enter your name")        

// let yourName = "SARKAR";

// if (userName === yourName) {
  
//     console.log("Hello, " + userName + "! Welcome!");
// } else {
 
// }

                                                   // Question 5

// var userValue = prompt("Enter a number:");

// var number = parseInt(userInput);

// if (number % 3 && number % 3) {
   
//         console.log("Number is divisible by 3");
       
// }else{
//      console.log("Number is not divisible by 3");
   
// }

                                                 // Question 6

// var userInput = prompt("Enter a character:");       

// var charCode = userInput.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     console.log("The input is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     console.log("The input is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     console.log("The input is a lowercase letter.");
// } else {
//     console.log("Invalid input.");
// }

                                                 // Question 7

// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));     
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// var result;
// switch (operator) {
//     case "+":
//         result = number1 + number2;
//         console.log("Result: " + result);
//         break;
//     case "-":
//         result = number1 - number2;
//         console.log("Result: " + result);
//         break;
//     case "*":
//         result = number1 * number2;
//         console.log("Result: " + result);
//         break;
//     case "/":
//         if (number2 !== 0) {
//             result = number1 / number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Division by zero is not allowed.");
//         }
//         break;
//     case "%":
//         if (number2 !== 0) {
//             result = number1 % number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Modulo by zero is not allowed.");
//         }
//         break;
//     default:
//         console.log("Invalid operator.");
//         break;
// }

                                                 // Question 8

// var inputTime = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));    

// if (inputTime >= 0 && inputTime <= 2359) {

//     var hours = Math.floor(inputTime / 100);
//     var minutes = inputTime % 100;

//     var period = (hours >= 12) ? "PM" : "AM";
//     hours = (hours > 12) ? hours - 12 : hours;
//     hours = (hours === 0) ? 12 : hours; 

//     console.log("Converted time: " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period);
// } else {
//     console.log("Invalid input. Please enter a valid time in 24-hour format.");
// }

                                                 // Question 9

// // Prompt the user for input year in YYYY format
// var inputYear = parseInt(prompt("Enter a year (YYYY format):"));      

// // Check if it's a leap year using if, else if, and else statements
// if (inputYear % 4 === 0) {
//     if (inputYear % 100 === 0) {
//         if (inputYear % 400 === 0) {
//             console.log(inputYear + " is a leap year.");
//         } else {
//             console.log(inputYear + " is not a leap year.");
//         }
//     } else {
//         console.log(inputYear + " is a leap year.");
//     }
// } else {
//     console.log(inputYear + " is not a leap year.");
// }


                                                  // Question 10

// a.
// let enterPass = prompt("Enter your correct password")

// b.
// let uPass = prompt("Enter your password")
// if(uPass===enterPass){
//   alert('Welcome! Password is correct');
// }else{
//   alert('Incorrect Password! enter a valid password');
// }

// c.
// let coPass = "ayan";

// let userPass = prompt("Enter your password")

// if (!userPass){
//         console.log("Please enter your password.");
// } else{
//     if (userPass === coPass) {
//         console.log("welcome! Password is correct ");
//     } else {
//         console.log("Incorrect! Try again");  
//     }
// }

                                                 // Question 11

// let userName = prompt("Enter your name ")

// if(userName.toLowerCase()==="ayan"){
//         document.write("Welcome " +userName)
// } else {
//         document.write("You are not Ayan")
// }

                                                 // Question 12

// let greeting;
// let hour  = 13 ;

// if(hour < 18 && hour < 18){
//         console.log("Good day");
// } else {
//         console.log("Good evening");
// }

                                              // Question 13

// let num1 =prompt("Enter first Integer")
// let num2 = prompt("Enter second Integer")

// function findLargerInteger(num1,num2){
//         if(num1>num2){
//                 return num1 + " is larger"
//         }  else {
//                 return "Both are equal";
//         }
// }
// let result= findLargerInteger(num1,num2)
// console.log(result);


                                                 //ASSIGNMENT ARRAY 2 

//question 1

let studentNames = [];

studentNames.push("Taha");
studentNames.push("Saad");
studentNames.push("Abdullah");

console.log(studentNames); 

//question 2

// let studentNames = new Array();
// let studentNames = [];


//question 3

// let colors = ["red", "green", "blue", "yellow"];


//question 4

// let numbers = [1, 2, 3, 4, 5];


//question 5

// let flags = [true, false, true, false, true];


//question 6



//question 7

// let networks = ["Mobilink", "Telenor", "Zong", "Ufone", "Warid"];

// console.log("Available mobile networks in Pakistan:");
// for (let i = 0; i < networks.length; i++) {
//     console.log(networks[i]);
// }


//question 8

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
// document.write("<ol>");

// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }

// document.write("</ol>");


//question 9

// let topMovies2015 = [];

// topMovies2015.push("Avengers: Age of Ultron");
// topMovies2015.push("Star Wars: The Force Awakens");
// topMovies2015.push("Jurassic World");
// topMovies2015.push("Inside Out");
// topMovies2015.push("Mad Max: Fury Road");

// document.write("<h2>Top Movies of 2015:</h2>");
// document.write("<ul>");
// for (let i = 0; i < topMovies2015.length; i++) {
//     document.write("<li>" + topMovies2015[i] + "</li>");
// }
// document.write("</ul>");

// document.write("<p>Number of movies in the list: " + topMovies2015.length + "</p>");


//question 10

// let favoriteCars = ["Tesla Model S", "Porsche 911", "Audi R8", "BMW M3", "Mercedes-Benz S-Class"];

// console.log("First index of the array: " + favoriteCars[0]);

// console.log("Car at first index of the array: " + favoriteCars[0]);

// console.log("Last index of the array: " + (favoriteCars.length - 1));

// console.log("Car at last index of the array: " + favoriteCars[favoriteCars.length - 1]);
