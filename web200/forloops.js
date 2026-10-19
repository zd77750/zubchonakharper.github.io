//STANDARD LOOP: iterate list of products using CONST (NOTICE have to use "[,]" to define my array.)
const sneakers = [
    "Nike SB Janoski",
    "Adidas Jermey Scott Superstar",
    "New Balance 9060",
    "Air Jordan Retro 5 Chinese New Year",
    "VANS Old Skool Burgundy",
];
//STANDARD LOOP: using "let sneakerOutput" to display list of items.
let sneakerOutput = "";
//STANDARD LOOP: using my own initialization, condition, and increment of my rendered list.
for (let i=0; i < sneakers.length; i++) {
    sneakerOutput += "<li>" + sneakers[i] + "</li>";
}
//STANDARD LOOP: used to display results on HTML
document.getElementById("sneakerList").innerHTML = sneakerOutput;


//NESTED LOOP: create a "table" name for HTML
let tableOutput = "<table border='1' cellpadding='8'>";
//NESTED LOOP: create a condition where my number starts at 1 and my table only goes up to 8 using <tr>.
//NESTED LOOP: create a row of 8.
for (let row = 1; row <= 8; row++){
    tableOutput += "<tr>";
//NESTED LOOP: create a column of 8 inclduing in each row.
for (let col = 1; col <= 8; col++){
    tableOutput += "<td>" + (row*col)+"</td>";
}
//NESTED LOOP: Closing Tags used to close Table Rows and Table itself.
tableOutput += "</tr>";
}
tableOutput += "</table>";
//NESTED LOOP: used to display results on HTML.
document.getElementById("multiplicationTable").innerHTML = tableOutput;
