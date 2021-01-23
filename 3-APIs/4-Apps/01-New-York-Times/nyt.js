const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //where to go to retrieve results
const key = 'MxvhQayGjclBniOpE5c7H1w4Y4a4xBfX'; //api key gains access to the NYT data
let url; 

//returns elements from the DOM
const searchTerm = document.querySelector('.search'); 
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
//results nav
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');

//results section
const nav = document.querySelector('nav');
const section = document.querySelector('section');

//hides next and previous
nav.style.display = 'none'; 
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage); 

//fetch results
    function fetchResults(e) { 
        e.preventDefault();
        console.log(e;
        console.log(searchTerm.value);
        url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; 
        console.log('URL:' url);
    }

//challenge at the end of the module
  if (articles.length >= 10 && pageNumber == 0) {
        nextBtn.style.display = 'block'; //shows the nav display if 10 items are in the array
        previousBtn.style.display = 'none'; 
      } else if (articles.length >= 10) {
        nextBtn.style.display = 'block'; //shows the nav display if 10 items are in the array
        previousBtn.style.display = 'block'; 
      } else if (pageNumber > 0) {
        nextBtn.style.display = 'none';
        previousBtn.style.display ='block';
      } else {
        nextBtn.style.display = 'none'; //hides the nav display if less than 10 items are in the array
        previousBtn.style.display = 'none';
      };

  if(startDate.value !== '') {
      console.log(startDate.value)
     url += '&begin_date=' + startDate.value;
    };

  if(endDate.value !== '') {
    url += '&end_date=' + endDate.value;
  };
console.log(url);
    fetch(url)
      .then(function(result) {// go to the url for results
      return result.json();//returns the data as a json and returns a promise
    }).then(function(json) {
      displayResults(json); 
    });

 function displayResults(json) {
  while (section.firstChild) {
  section.removeChild(section.firstChild);



 } else {
 for(let i = 0; i < articles.length; i++) {
     let article = document.createElement('article');
     let heading = document.createElement('h2');
     let link = document.createElement('a');
     let img = document.createElement('img');  //1
     let para = document.createElement('p');  
     let clearfix = document.createElement('div');


     for(let j = 0; j < current.keywords.length; j++) {
       let span = document.createElement('span');   
       span.textContent += current.keywords[j].value + ' ';   
       para.appendChild(span);
     }

       //2
     if(current.multimedia.length > 0) {
       //3
       img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
       //4
       img.alt = current.headline.main;
     }

     clearfix.setAttribute('class','clearfix');

     article.appendChild(heading);
     heading.appendChild(link);
     article.appendChild(img); 
     article.appendChild(para);
     article.appendChild(clearfix);
     section.appendChild(article);
   }
};