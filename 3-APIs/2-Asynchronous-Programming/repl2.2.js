async function getStarWars() {
    await fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(json=>console.log(json))
        Promise.resolve('success')
        .then(console.log('this should print last'))        
}


  getStarWars()