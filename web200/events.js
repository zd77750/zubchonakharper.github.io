//Event Joke #1 - Click Event

function changeText(id) {
    id.innerHTML = 
    "<b>I dislocated my shoulder at the gym while doing dumbbell overhead presses using 50lb dumbbells. <br> Daniel is a dumbbell himself...</b>";
}

//Event Joke #2 - Mouse Over Event

function mouseOver(id) { 
    id.innerHTML = "<b>Jokes on you! The Mouse Over Event is the joke.</b>";
    id.style.color = "Red";
}

document.getElementById("eventJoke").addEventListener("mouseover", function() {
    mouseOver(this);
})

//Event Joke #3 - Keypress Event

function keyPress(id) {
    id.value = 
    "You have pressed a button";
}

document.getElementById("eventKeyPress").addEventListener("keypress", function() {
    keyPress(this);
})

//Event Joke #4 - Page Load Event

function pageLoad () {
    document.getElementById("eventPageLoad").innerHTML = 
    '<img src="welcome-to-internet.webp" alt="Assignment #5">';
}

//*EXTRA CREDIT*