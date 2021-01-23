/*ARRAYS
What is an array?
has [] brackets
can hold multiple datatypes
arrays can list data types in an ordered, numbered way
*/

let students = ["Tony", "Marshall", "Rhys", "Ray", true, ["Ryan", "Iesha"]];

console.log(typeof students); //tells me this is an object
console.log(students instanceof Array); //instanceof tells me "true" for the type

//recall for-of loop -> fives the value of the array
let food = ["pecan pie", "shrimp", "hot dog"];
for (f of food) {
    console.log(f+ "is amazing!");
}

//ARRAY METHODS - built in methods we can use in java script as long as we have the right type

food.push ("pizza");//adds to the array
console.log(food);
food.splice(1, 1, "banana"); //inserts into an existing array (what position, how many items to remove(can be 0), and what are we replacing with)
console.log(food)
food.pop ();//removes the last element of the array
console.log(food);

food = food.slice(2,1); //the first number is the element to slice from the array, while the 2nd number is the stop position (not to be included)
console.log(food);

//forEach allows us to iterate with lops specifically, and we can directly grab both the elements and their index numbers
let food = ["pecan pie", "shrimp", "hot dog"];
food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`THe ${food} food in our array is at position ${index}`);
})

let movie = ['Mary Poppins', '300', 'Snow White'];
movie.forEach(movie => console.log(movie));
console.log(movie.length);

//rearrange the values in the array

let arr = new Array(1,2,3,4,5);
if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}
