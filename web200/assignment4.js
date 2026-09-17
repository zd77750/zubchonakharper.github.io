//Function #1
//Basic Function allows JS to return numbers using "id" and "innerHTML"

function AddFunction (num1, num2) {
    return num1 + num2
}

document.getElementById("function1").innerHTML = "The total of my Addition function is " + AddFunction(5,8);



//Function #2
//**NOTICE** Semicolon (;) is including at the end of function ("{,}") due to "let" being present.

let MultiplyFunction = function(num1,num2){
    return num1 * num2;
};

document.getElementById("function2").innerHTML = "The total of my Multipication function is " + MultiplyFunction(15,6)



//Function #3
//Using the ARROW Expression results having an "equal/arrow" replacing traditional "function/equals" sign for operation.

let SubtractFunction = (num1,num2) => {
    return num1 - num2;
};

document.getElementById("function3").innerHTML = "The total of my Subtraction function is " + SubtractFunction(95,86);
