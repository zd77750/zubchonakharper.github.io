/*
"var" is used before ES6, a global scope that's easy to redeclarate any variable. Can get difficult to maintain; volatile to bugs and compromises.

"let" is a block scope that prevents repetition of declarations within the scope, can be updated using reassignment. 

"const" is another block scope, variable is set and cannot be updated by an end-user.
 */

// The "var" here is set to welcome users to the website (end-users can also redeclarate this var):
 var welcomeClass = "You have entered WEB 200 at William Rainey Harper College"
 var welcomeMetallica = "You have entered the Sandman by Metallica, Join Us live at the Las Vegas Sphere!"

 // This is me hacking into the mainframe >:-)
 window.alert(welcomeMetallica)

 // The "const" remains unchanged, JavaScript identifies the First and Last name of student. 
 // The "let" is allowed to be used as a variable when combining "studentfName" and "studentlName". (must include + and " " to prevent concatenation)
const studentfName = "Daniel";
const studentlName = "Zubchonak";
let studentFullName = studentfName + " " + studentlName;

 // JavaScript Data can be displayed using possibile outputs like the one below (.innerHTML allows user to identify; "id", the element and write text.)
document.getElementById("demo").innerHTML="This is " + studentFullName + "'s Assignment #2.";

document.getElementById("intro").innerHTML= studentFullName + "'s personal introduction to Assignment #2, blah blah blah, yaddah yaddah yaddah.";

document.getElementById("bedTime").innerHTML= 
// The Button of Despair
document.write("Whatever you do, DO NOT TOUCH THE BUTTON")
document.write("<br>")
document.write("<button id='myButton'>Button</button>");
document.getElementById("myButton").onclick = function() {
    document.getElementById("myButton").innerHTML = "James Hetfield is hiding under your bed, waiting for the Sandman to Enter the room. DO NOT PANIC."
}