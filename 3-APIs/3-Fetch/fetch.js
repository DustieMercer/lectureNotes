let button = document.getElementById('button');
let resultsDiv = document.getElementById('results')
button.addEventListener('click', buttonClick)

function buttonClick(){

    // fetch('../scratch.txt')
    // // .then(
    // //     function (res) {
    // //         return res.text()
    // //     }
    // // )
    // .then(res=>res.text())
    // .then(data=> console.log(data))
    let compiler = '<h2>Pokemon</h2>'
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        data.results.forEach(pokeman => {
            compiler += `
            <ul>
                <li>Name: ${pokeman.name}</li>
                <li><a href=${pokeman.url}>More Info</a></li>
            </ul>
            `
        });
        resultsDiv.innerHTML = compiler;
    })
    .catch(err=>console.log(err))
}