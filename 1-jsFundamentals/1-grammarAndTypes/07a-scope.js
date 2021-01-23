/*
SCOPE

What is scope?
JS has both local and global scope
*/

//example 1
var x = 12;
function scope(){
    var x = 33;
    console.log(x);
}

scope(); //logs 33
console.log(x); //logs 12

//example 2
var x = 12;
function scope(){
    x = 33;  //no 'var' means we are reassigning the variable
    console.log(x);
}
scope()
console.log(x);

//EXAMPLE 3
var x= 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x= 3; 
        console.log(x);
    }
    scopeInner();
    console.log(x);
}
scope();
    console.log(x);

//example 4
var x= 12;

function scope(){
    var x = 33;
    if (true){
    let x = 45;
    console.log (x);
}
console.log (x);
}
scope();
console.log(x);        


//example 5 contrasts with 4
var x =12;
function scope(){
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);
        }
        console.log(x);
}
scope();
console.log(x);