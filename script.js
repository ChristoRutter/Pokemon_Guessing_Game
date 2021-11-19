let randomPoke = Math.floor(Math.random()*898)
async function pokeGet(e) {
    e.preventDefault()
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`)
    var apiData = await response.json()
    pokeInfo.innerHTML = `
    <img src="${apiData.sprites.front_default}"></img>
    <p>Type is: ${apiData.types[0].type.name}</p>
    `
}

async function pokeGuess(query,e) {
    e.preventDefault()
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`)
    var apiData = await response.json()
    if(apiData.name == searchPoke.value){
        alert("You Win!")
        location.reload()
    }
    else{
        alert("Try Again")
    }
}