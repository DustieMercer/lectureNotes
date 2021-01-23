/*FUNCTIONS
-JavaScript functions are defined with the function keyword and can be written as a function declaration or a function expression

-FUNCTION DECLARATIONS are hoisted in our code and run ONLY when we call them (invoke them)
So any fucntion in our code sits and waits to be ran until we call it by name
Think of it as a student with his or her hand up, wiating to ask a quesiton.  that student does not ask the question until the the teacher calls upon them.

-FUNCTION EXPRESSIONS are not hoisted, and are generally stored in variables

-FUNCTIONS WITHOUT NAMES are known as anonymous functions
*/


//FUNCTION DECLARATION

function sayHello () {
    console.log ("Hi");
}

sayHello();

//FUNCTION EXPRESSION

let greetings = function (){
console.log("Hello");
}

greetings();

/*PARAMETERS

Think of parameters as a newly declared variable that we have not given a value to yet.
The value that we pass into our function when we call the function to run (which is known as the argument), is the value that gets assigned to the parameter.

general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function.  If we're passing in an integer, we may name our parameter num or number.
*/

function myDog(husky) { //in this example "husky" becomes the variable (husky = parameter)
    console.log(`my dogs name is ${husky}`);
}

myDog("Chuck"); //"husky" is what gets replaced (chuck = arguement)

//EXAMPLE

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`);
}

allMyDogs("Chuck", "Larry", "Moe");

/* RETURN
-functions can also manipulate the data sent to them, and return a new value

*/
function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return(average); 
    //"return"calls the variable  and stops execution of the function or code with 
    //that follows within the curly braces
}

let avgWeight = calculator(10, 20, 30);
console.log(avgWeight)

/*ARROW FUNCTION

-Arrow functions (or fat arrow function) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations
    this means that arrow functions do NOT get hoisted

-There are two types of arrow functions: concise body and block body
    The return happens automatically wiht a concise body arrow function
    The return does not happen automatically with a block body arrow function
*/

//CONCISE BODY
//EXAMPLE 1
let speak = (name) => console.log(`${name} goes woof`)
speak("Chuck");

//EXAMPLE 2
let nameJoiner = (first, last) => `${first}, ${last}`;
let fullName = nameJoiner('Dustie', 'Mercer');
console.log(fullName); 

//BLOCK BODY
//EXAMPLE

let speak = (name) => {
console.log(`${name} goes woof`)
}
speak ("Chuck")

//EXAMPLE 2
let nameJoiner = (first, last) => {
    return `${first}, ${last}`; //specifically tell it to return the value IMPORTANT
}

let fullName = nameJoiner('Dustie', 'Mercer');
console.log(fullName);

// PRACTICE I
// Write a function that takes two parameters  (Length and Width) that returns
// the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function areaCalc (length, width) {
    let totalArea = length * width
    return (`${length} by ${width} rectangle will give ${totalArea}`)
}

let area1 = areaCalc (5,5);
let area2 = areaCalc (9,5);
console.log(area1);

// Practice II
// Write a function that will convert dog years to human years
// Formula for conversion - human age = (dog age -2) x 4 +21

function dogAgeCalc (humanAge) {
    let dogAge = (humanAge-2)*4 +21;
    return (dogAge)
} 

let age = dogAgeCalc(5)
console.log(age);