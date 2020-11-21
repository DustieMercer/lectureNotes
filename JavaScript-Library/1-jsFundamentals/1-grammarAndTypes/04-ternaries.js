/*TERNARIES
simple version of conditional logic 
    ? = replaces "if" and simply means if the question is true, do what ever is  in the console.log
    : = replaces "else" and simply means if anything else do whatever is in the console.log
*/

//example 1
let x = 6;

x > 0 ? console.log("x is positive") : console.log("x is negative.");

//example 2

let greeting = 'salutations!';

greeting.length > 10 ? console.log ("that is a long greeting!") :
greeting.length == 10 ? console.log ("that greeting is exactly 10 character!") :
console.log ("what a normal greeting.");

/*
<condition to check> ? console.log <code to run> :
<next condition to check> ? console.log <code to run> :
console.log <code to run if anything else or default answer>;
*/