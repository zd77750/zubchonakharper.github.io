//"generateTable" is used to retrieve the button in the HTML
function generateTable() {

//The number 1 is where it begins, and result is defined as ""; result is used to display the entire multiplication table.
    let number = 1;
    let result = "";

//While allows me to setup a table that can go up to 12.
    while (number <= 12) {

//Continue Skips the number 8 in the multiplication table, Continue allows the system to skip the code and not display "7x5=35".
        if (number === 8) {
            number++;
            continue;
        }
//The result of each line will have the number "5" and the corresponding number with a result displayed at the end of each line.
    result += "<p>5 x " + number + " = " + (5 * number) + "<p>";

    number++;
    }
//This allows the document to retrieve the data and display inside the div tag of the HTML.
document.getElementById("multiplicationTable").innerHTML = result;

}