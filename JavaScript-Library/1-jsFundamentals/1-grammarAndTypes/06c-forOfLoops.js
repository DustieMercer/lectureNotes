/*
FOR OF LOOPS
*/

//of requires that your "thing" you're looping through be iterable--that means it must be numbered 

//gives the value not the number

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray) {
    console.log(cat, 'says meow');
}