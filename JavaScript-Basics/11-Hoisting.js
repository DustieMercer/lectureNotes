/*
************
 HOISTING
************

    - hoisting was thought up as a general way of thinking about how our code is compiled and executed.
        - there are two general phases that happen when we run our code:
            - creation phase: any variable (var, let, const) and functions in our code are stored to memory.
            - execution phase: values are assigned to the variables and functions that were stored to memory during the create phase

            (what's on the left side of the = is what's stored to memory during the creation phase) ---> let hoisted = true <--- (the value, or the right side of the =, is what gets assigned during the execution phase - before finally then running our code.)
    
    - Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and stored away in memory.

    - when our code is read, the file is read top to bottom, line by line, in sequential order. 

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/
console.log(hello) //hoisting acknowledges VAR, but is undefined
var hello = "hello";

console.log(hello) //hoisting will NOT acknowledge LET or CONST
let hello = "hello";

goodbye(); //hoisting will complete the function

function goodbye() {
    console.log("goodbye")
}



