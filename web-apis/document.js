console.log(document.body) // document.body allows us to begin accessing stuff on the HTML page

console.log(document.body.children) // Returns an array of the tags below the body tag

console.log(document.body.childNodes) // Returns an array with all of the children plus their content

console.log(document.body.children.childNodes[0].style.color) // Accesses a style element that we can then modify

document.getElementById() // How to find an element by ID
document.querySelector() // Also works, more powerful, can find classes and more than 1 level of classes

var $articleDiv = document.getElementById() // Dollar sign signifies the variable is an html element

document.querySelectorAll('p').setAttribute("style", "font-size: 65px;"); // Can set attributes that aren't defined/classes

document.createElement(tagName); // Will create an HTML element
document.body.appendChild(tag); // Will add it to the page

// No two arrays and no two objects are ever the same

const trashcan1 = [];                 
const trashcan2 = [];
trashcan1 === trashcan2; // This is false (also with ==)
const trashcan3 = trashcan1;
trashcan1 === trashcan3; // This is true

const nums = [1,2,3];
nums.push[4]; // This works, even with a const

// Hoisting in Javascript: JS interprets files not line by line, it hoists first.

var name = 'Sean';
var lastName = 'Marten';

// Can be called before being declared because of hoisting
sayHi();

function sayHi() {
    console.log("say hi");
}


var sayHello = function() {
    console.log('say hellow');
}

// This has to be after, since it is is declared like a variable
sayHello();

// But JS reads it like this...
// First looks at all variable declarations

// Variable declarations get hoisted, but not their values;
// Then it reads code line by line
var name;
var lastName;
var sayHello;
// These are hoisted to the top
function sayHi() {
    console.log('say Hi');
}

name = 'Sean';
lastName = 'Marten';
sayHi();
sayHello = function() {
    console.log('say hellow');
}

sayHello();

sayHi();
// LET AND CONST DO NOT HOIST, vars even hoist in functions and for loops, vars become accessible even inside of forloops (and functions)
// Let and const only stay in the block of code they are declared in