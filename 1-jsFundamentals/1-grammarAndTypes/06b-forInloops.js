/*
FOR IN LOOPS
*/

//does not require the "thing" you loop through to be numbered

let student = {
    name:'peter',
    awesome: true,
    degree: 'javascript',
    week: 1
};

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

//example 2 - "cat" in the following example is the placement in the array

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
    console.log(cat);
    console.log (catArray [cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name

let name = "dUstie";
let capName;

for (n in name){
    if (n == 0){
        capName = name[n].toUpperCase();}
    else {
        capName += name[n].toLowerCase();} 
}
console.log(capName);





