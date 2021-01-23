/*
ARRAYS
Arrays are used to store multiple values in a single variable
    there are array methods that allow us to traverse, as well as mutate, the data being held by an array

    arrays are 0 indexed, meaning the fierat item in an array will have an index of 0, and the last item will have an index of the arrays length -1
    */

let arr = ["this is 1st", "this is 2nd", "this is third", "this if fourth"];

console.log(arr[arr.length-1]); ///always refers to the last item in an array

let test = new Array(); //this is the array class contructor
console.log(test);

let test = new Array(3); //adding a single number=an emply array with <x> places 
console.log(test);

let test = new Array(3,5,9); //adding multiple numbers creates an array 
console.log(test);

let boardgames = ["monopoly", "clue", "risk", "candyland", "catan"];

//BLOCK BODY
for (let i = 0; i < boardgames.length; i++) {
    console.log(boardgames[i]);
}

//CONCISE BODY
boardgames.forEach(game => console.log (game));

//ANONYMOUS FUNCTION
boardgames.foreach(function(game) {
    console.log(game);
})

let shoppingList = ["celery", "limes", "lemons","grenadine", "oranges"];

//to access a specific element in an array, use bracket notation along with its index value
console.log(shoppingList[0]);

//array.length - returns the number of items in the array
console.log(shoppingList.length);

//array.push() - adds element to the end of the array
shoppingList.push("salt");
console.log(shoppingList);

//array.unshift() - adds a new element at the beginning of the array
shoppingList.unshift("salt");
console.log(shoppingList);

let shoppingList = ["celery", "limes", "lemons","grenadine", "oranges"];

//array.pop() - removes the last element in the array and returns that element
let removedElement = shoppingList.pop();
console.log(shoppingList);
console.log(removedElement);

//Array.shift() - removes the first element in the array
let removedElement2 = shoppingList.shift();
console.log(shoppingList);
console.log(removedElement2);

//array.map() - transforms the elements in the original array by calling the given function once fore each element in the array
console.log(shoppingList.map(item => item.toUpperCase()));

shoppingList.push("pepper");
console.log(shoppingList);

//array.filter() - creates a new array with only the elements that pass the test in a given function
let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
console.log(newShoppingList)

//arrray.find() - returns the first element in the array that passes a test given as a new function
let shoppingItem = shoppingList.find(item => item.startsWith("l"));
console.log(shoppingItem);

let shoppingList = ["celery", "limes", "lemons","grenadine", "oranges"];

//array.includes() - determines whether an array has a specific element (True/false)
console.log(shoppingList.includes("limes"));

//array.indexOf() - search the array for specific element and returns its first index. Returns -1 when element is not found and place when it is found
console.log(shoppingList.indexOf("lemons"));

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//array.findIndex() - search the array for specific element and returns its first element in the array that passes the test in the given function
let foundIndex = shoppingList.findIndex(item => item.startsWith("c"));
console.log(foundIndex);

//array.every() - check if all elements in an array pass a test given as a function. If there is 1 element that returns false value, the function returns false and does not check the rest of the elements
console.log(shoppingList.every(item => item.length > 1));

//array.concat() - selects a part of the array and returns a new array. selects the elements starting at the provided start argument and end at, but does not include, the provided arguement
let anotherShoppingList = ["salt", "mint leaves", "olives"];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);

//array.slice() - selects a part of the array and returns a new array. Selects the elements starting with the provided start arguement and ends at, but not include the provided end argument.
let newArray = shoppingList.slice(1,3);
console.log(newArray);

//array.splice() - adds/removes element in the array and returns the remvoed elements. first argument takes in an integer that specficies at what index to add/remove elements.  Second argument takes in the nubmer of items to be removed. optional third arguement that takes in teh new elements to be added to the array in the spot where the elements were removed.

let shoppingList = ["celery", "limes", "pizza", "lemons","grenadine", "oranges"];
shoppingList.splice(1,2,"zucchini");
console.log(shoppingList);

//array.sort() - sorts arrays by alpha or numeric, and either acsending or descending.  by default its alpha ascending. can take a compare function which indicates if you want to csort by ascending or descending.
console.log(shoppingList.sort());

let costs = [3,2,13,4];
console.log(costs.sort((a,b)=>b-a)); //descending sort
console.log(costs.sort((a,b)=>a-b));//ascending sort

//array.reverse() - reverses the order of the element sin the array
console.log(shoppingList.reverse());

//array.toString() - converts the array to a string
console.log(shoppingList.toString());

//array.join () - coverts the elements in the array into a string. can accept an optional perameter, "seperator" which indiscates how the elements will be seperated. default seperator is a comma
console.log(shoppingList);
console.log(shoppingList.join("! and "));

//lastly, an ES6 feature: the spread operator.  The spread operator, indicated by these 3 dots "..." before an array expands the contents of the array and takes it out of the array structure
console.log(shoppingList);
console.log(...shoppingList);

let numArray = [20,40,60];
function sum(numOne, NumTwo, numThree){
    return numOne+NumTwo+numThree;
}
console.log(sum(...numArray));