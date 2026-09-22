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
//Event Joke #3 - Keypress Event
function keyPress(id) {
    id.value = 
    "You have pressed a button";
}
//Event Joke #4 - Page Load Event
function pageLoad (id) {
    document.getElementById("eventPageLoad").innerHTML = "PAGE LOADED: Welcome to my Assignment #5. This is a Page Load Event example.";
}
//*EXTRA CREDIT*