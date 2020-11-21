/*
LOOPS
quick and easy way to do something repeatedly.  
many different ways to do loops, but they all do essentially the same thing:
for statement
do while
while
alabeled
break
continue
for in
for of
.forEach
.map

loops contain 
    1.creation of an indexing variable 
    2.a run conditions 
    3. a change to the indexing variable
*/

//count to 10 from 0 and log the numbers

for (let i = 0; i<= 10; i++) {
    console.log(i);
}

//LOOP CAN RUN INFINITELY!!!!!!!!!

// counts to -25 by -3, starting from 2, logs the numbers

for (let i =2; i >= -25; i = i-3) {
    console.log(i)
}

//Display the letters in a name individually

let name = 'Kinkade';

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//  []  accesses arrays, but can can also access individual letters of a string

//for loops can use lots of variables

let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment) {
    console.log(i);
}

//Math is a built in javascript object.  Math.floor shaves off the decimal
// for (index variable that starts at some point; with a run condition/stop; with a variable)


