// Part 1: JavaScript Basics
// Variables and Data Types
let name = "John Doe"; // string
let age = 25; // number
let isStudent = true; // boolean
let skills = ["JavaScript", "HTML", "CSS"]; // array
let user = { name: "John", age: 25 }; // object

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Skills: ${skills} (Type: ${typeof skills})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operation!");
        return;
    }
    alert(`Result: ${result}`);
}

// Call the calculator function
calculator();

// Functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
}

let greetingMessage = greetUser(name);
document.getElementById("result").innerHTML = greetingMessage;

// Part 2: JavaScript Control Structures

// If Statements
let userAge = prompt("What is your age?");
if (userAge >= 18) {
    document.getElementById("result").innerHTML += "<br>You are eligible to vote.";
} else {
    document.getElementById("result").innerHTML += "<br>You are not eligible to vote yet.";
}

// Loops
let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
}
document.getElementById("result").appendChild(ol);

// Part 3: Introduction to the DOM

// Changing the heading text
document.querySelector("h1").textContent = "JavaScript in Action!";

// Creating and adding a new paragraph inside dynamic-content div
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
