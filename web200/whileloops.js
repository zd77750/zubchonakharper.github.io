//"generateTable" is used to retrieve the button in the HTML
function generateTable() {

//The number 1 is where it begins, and result is defined as ""
    let number = 1;
    let result = "";

//While allows me to setup a table that can go up to 12.
    while (number <= 12) {

//Continue Skips the number 8 in the multiplication table
        if (number === 7) {
            number++;
            continue;
        }
    
    result += "<p>5 x " + number + " = " + (5 * number) + "<p>";

    number++;
    }

document.getElementById("multiplicationTable").innerHTML = result;

}