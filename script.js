// Grab image and button elements from HTML document
var pickUpLine = document.querySelector("#pickUpLine");
var btn = document.querySelector("#rand_btn");


var joke = document.querySelector("#joke");


// Asynchronous function that gets data from external API
async function generateImage() {
    console.log("HERE")
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', ' http://yesno.wtf/api/', true);
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Methods', 'GET');


    var data = await request.json();

    console.log(data)
    

    // Send request
    request.send()
}
// Add event listener to button to call 'generateImage'function when pressed
btn.addEventListener('click', generateImage);