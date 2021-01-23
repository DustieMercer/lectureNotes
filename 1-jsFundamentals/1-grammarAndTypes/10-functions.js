//FUNCTIONS

//general ideas: at their broadest level, functions do the following:
//1 they take some input which the functino will handle/process
//2 they proces the input given to them
//3 they usually, but not always, reutrn some value
//4 they can be invoked (used) as many times as we want, cutting down on code repetition

//example 1:
function newFunc (num) {
    return num +1;
}
console.log(newFunc(7));

//example two:

function sentence(firstName, lastName){
    return 'My first name is ${firstName} and my last name is ${lastName}';
}
console.log(sentence('Jonathan', 'Huer'));

//lets build a funciton that takes a complex type--an array in this case, adn console.logs each
//item in the input aray

let arr = [1, true, {key:'string'}, [0,false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);