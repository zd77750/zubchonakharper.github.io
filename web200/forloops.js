//STANDARD LOOP: iterate list of products using CONST
const sneakers = {
    "Nike SB Janoski",
    "Adidas Jermey Scott Superstar",
    "New Balance 9060",
    "Air Jordan Retro 5 Chinese New Year",
    "VANS Old Skool Burgundy"
};
//STANDARD LOOP: using "let sneakerOutput" to display list of items.
let sneakerOutput = "";
//STANDARD LOOP: using my own initialization, condition, and increment of my rendered list.
for (let i=0; i < sneakers.length; i++) {
    sneakerOutput += "<li>" + sneakers[i] + "</li>";
}
//STANDARD LOOP: used to display results on HTML
document.getElementById("sneakerList").innerHTML = sneakerOutput