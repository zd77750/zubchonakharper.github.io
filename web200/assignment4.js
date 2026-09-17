//Function #1
//Basic Function allows JS to return numbers using "id" and "innerHTML"

function addFunction (num1, num2) {
    return num1 + num2
}

document.getElementById("function1").innerHTML = "The total of my Addition function is " + addFunction(5,8);



//Function #2
//**NOTICE** Semicolon (;) is including at the end of function ("{,}") due to "let" being present.

let multiplyFunction = function(num1,num2){
    return num1 * num2;
};

document.getElementById("function2").innerHTML = "The total of my Multiplication function is " + multiplyFunction(15,6)



//Function #3
//Using the ARROW Expression results having an "equal/arrow" replacing traditional "function/equals" sign for operation.

let subtractFunction = (num1,num2) => {
    return num1 - num2;
};

document.getElementById("function3").innerHTML = "The total of my Subtraction function is " + subtractFunction(95,86);


//**EXTRA CREDIT** - Custom Buttons

// EXTRA CREDIT - Add button
document.getElementById("addButton").onclick = function() {

    let num1 = Number(document.getElementById("addNum1").value);
    let num2 = Number(document.getElementById("addNum2").value);

    document.getElementById("additionEC").innerHTML =
        addNumbers(num1, num2);
};


// EXTRA CREDIT - Multiply button
document.getElementById("multiplyButton").onclick = function() {

    let num1 = Number(document.getElementById("multiplyNum1").value);
    let num2 = Number(document.getElementById("multiplyNum2").value);

    document.getElementById("multiplicationEC").innerHTML =
        multiplyNumbers(num1, num2);
};


// EXTRA CREDIT - Subtract button
document.getElementById("subtractButton").onclick = function() {

    let num1 = Number(document.getElementById("subtractNum1").value);
    let num2 = Number(document.getElementById("subtractNum2").value);

    document.getElementById("subtractionEC").innerHTML =
        subtractNumbers(num1, num2);
};
