// const header = document.getElementById ('header');
// console.log(header);

// header.style.color = "pink";
// header.innerText = 'Hello World';

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = 'I changed error 2';

// //EXAMPLE 1
// for (let i = 0; i<errorList.length; i++) {
//     errorList[i].style.color = "red";
// }

// //EXAMPLE 2
// for (error of errorList){
//     error.style.color = "green";
// }

// //NOTE - looping ".forEach" CANNOT DO because it does not loop thru

// //getElementsByTagName

// const tags = document.getElementsByTagName('p');
// console.log(tags);

// tags[0].innerText='surprise';

// const item = document.getElementsByTagName('li');
// console.log(item);

// item[0].style.fontStyle = "italic";

// for (let i=0; i<item.length; i++) {
//     item[i].style.fontStyle = "italic";
// }


//QUERY SELECTOR - Returns 1st item and stops looking, can use tags or #header or .class

const header = document.querySelector('h1');
console.log(header);

const headerTags = document.querySelectorAll('h1');
console.log(headerTags);

headerTags.forEach(h =>{
    h.style.color = 'blue';
})

const errorList = document.querySelectorAll('.error-list')
console.log(errorList);

errorList.forEach(li => {
    li.style.fontStyle = "italic";
    });