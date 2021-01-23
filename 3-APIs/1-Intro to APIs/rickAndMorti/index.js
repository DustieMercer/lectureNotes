let url = 'https://rickandmortyapi.com/api/character/';


fetch(url)
    .then(function(response) {
        return response.json()
})
    .then(function(json) {
        console.log(json.results)
        // let char1 = json.results[0].image
        // let char2 = json.results[1].image
        // displayImages(char1, char2)
    })

// function displayImages (char1,char2) {
//     let char1Image = document.createElement('img')
//     let char2Image = document.createElement('img')
//     char1Image.src = char1
//     char2Image.src = char2
//     let body = document.querySelector('body');
    
//     body.appendChild(char1Image)
//     body.appendChild(char2Image)
// }
