let myString = "this is a string";
let myNumber = 10;
let myBoolean = false;
let myArray = [10, "string" []];
let myObject = {firstKey: "a string"}
let myUndefined = undefined;
let myNull = null;

console.log (typeof myBoolean)

/*
CHALLENGE 2
Types Challenge
​
​
BRONZE
​
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
​
​
--------------------------------------------------------------------------
​
SILVER
​
​
Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/


let registration = {
                   
    enrollee: "Dustie Mercer",
    class: {},
    lengthWeeks: 24,
    location: "Remote",
    isEasy: false,
};


let value = typeof registration.isEasy;
console.log(value);

if (value === "string"){
console.log("The value is a string")
}
else if (value === "boolean"){
    console.log("The value is a boolean");
}
else if (value === "object"){
    console.log("The value is an object")

}else{
    console.log("What are you?!");
}