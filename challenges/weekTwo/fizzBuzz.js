/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY

    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif
*/
//BRONZE
let fb = 15;

if(fb % 3 == 0 && fb % 5 == 0) {
    console.log("fizz buzz");
} else if (fb % 3 == 0) {
    console.log("fizz");
} else if (fb % 5 == 0) {
    console.log("buzz");
}

//SILVER

//because 'isDivisibleBy5and3' is before the equal sign it is TRUE (or otherwise considered a boolean)
//put the equation on the right to get a console log a statement for true or false
//using 'break' in between each case keeps the code from running through the all cases.
//will stop after the first match!

let fb = 150;

let isDivisibleBy5and3 = fb % 3 == 0 && fb % 5 == 0
let isDivisibleBy5 = fb % 5 == 0
let isDivisibleBy3 = fb % 3 == 0

switch (true) {
    case (isDivisibleBy5and3):
    console.log("fizz buzz");
    break;
    case (isDivisibleBy5):
    console.log("fizz");
    break;
    case (isDivisibleBy3):
    console.log("buzz");
}