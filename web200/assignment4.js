//Function #1
//Basic Function allows JS to return numbers using "id" and "innerHTML"

function AddFunction (num1, num2) {
    return num1 + num2
}

document.getElementById("function1").innerHTML = AddFunction(5,8);



//Function #2
//**NOTICE** Semicolon (;) is including at the end of function ("{,}") due to "let" being present.

let MultiplyFunction = function(num1,num2){
    return num1 * num2;
};

document.getElementById("function2").innerHTML = MultiplyFunction(15,6)



//Function #3
//Using the ARROW Expression results having an arrow replacing traditional equals sign for operation.

let SubtractFunction = function(num1,num2) => {
    return num1 - num2;
};

document.getElementById("function3").innerHTML = SubtractFunction(95-86);
