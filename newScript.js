// Grab text and button elements from HTML document

//YES or NO API
var ynString = document.querySelector("#YESorNO");
var btnYN = document.querySelector("#YNbtn");




//Joke API
var jokePunchline = document.querySelector("#jokePunchline")
var jokeSetup = document.querySelector("#jokeSetup")
var btnJOKE = document.querySelector("#jokeButton");

//PickupLine API (OURS)
var pickUpLine = document.querySelector("#pickUpLine");
var btnPICKUPLINE = document.querySelector("#pickUpLineButton");

// Asynchronous function that gets data from external API
async function generateYesNO() {
    var response = await fetch("http://yesno.wtf/api/");
    var data = await response.json();
    var answer = data.answer;
    console.log(data.answer);

    document.querySelector("#TextYesNo").innerHTML = answer;

}




async function generateJoke() {
    var response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    var data = await response.json();
    console.log(data);
    var punchLine = data[0].punchline;
    var setup = data[0].setup;

    console.log(punchLine);
    console.log(setup);
    document.querySelector("#jokeSetup").innerHTML = setup;
    document.querySelector("#jokePunchline").innerHTML = punchLine;

}


async function generatePickupLine() {
    var response = await fetch("http://127.0.0.1:5000/randomQuote");
    var data = await response.json();
    line = data.pickupLine;
    console.log(line);
    document.querySelector("#pickUpLine1").innerHTML = line;
}

// Add event listener to each button when clicked
btnYN.addEventListener('click', generateYesNO);
btnJOKE.addEventListener('click', generateJoke);
btnPICKUPLINE.addEventListener('click', generatePickupLine);


