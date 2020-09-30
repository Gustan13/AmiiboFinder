console.log('fetching doofenschmerz');

//const input = document.getElementById('hejdoa');

//const button = document.getElementById('sub');

let carName = "";

/*button.addEventListener("click", () => {
    carName = input.value;
    catchPhrase();
    input.value = "";
});*/

new URLSearchParams(window.location.search).forEach((value, name) => {
    carName = value;
    //catchPhrase();
});

/*async function catchPhrase() {
    const p = await fetch("https://www.amiiboapi.com/api/amiibo/?name=" + carName);
    const character = await p.json();

    document.getElementById('results').src = character["amiibo"][0]["image"];
    document.getElementById('series').innerHTML = "Game series:     " + character["amiibo"][0]["gameSeries"];
    document.getElementById('name').innerHTML = "Name:   " + character["amiibo"][0]["name"];
}*/

fetch("https://www.amiiboapi.com/api/amiibo/?name=" + carName, { "method":"GET" })
.then (response => {
    return response.json();
}).then (jotaro => {
    document.getElementById('results').src = jotaro["amiibo"][0]["image"];
    document.getElementById('series').innerHTML = "Game series:     " + jotaro["amiibo"][0]["gameSeries"];
    document.getElementById('name').innerHTML = "Name:   " + jotaro["amiibo"][0]["name"];
}).catch (error => {
    const dude = document.getElementById('grid');
    dude.parentNode.removeChild(dude);

    const dude2 = document.getElementById('container');

    dude2.createElement('h1').innerHTML = 'this character does not exist';
    
    
})

/*new URLSearchParams(window.location.search).forEach((value, name) => {
    carName = value;
    catchPhrase();
});*/
