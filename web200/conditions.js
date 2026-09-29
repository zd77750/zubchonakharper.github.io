//STEP #1: In order for me to get responsive feedback, I need my button to wrap around all of the statements so that I won't need to create an individual button for each question.

document.getElementById("checkButton").addEventListener("click", function() {

//STEP #2: In order to retrieve the proper data, I used id tags to correspond to each question and set values using conditional statements on the HTML.

    let answer1 = document.getElementById("answer1").value;
    let answer2 = document.getElementById("answer2").value;
    let answer3 = document.getElementById("answer3").value;

//STEP #3: Create questions with proper value types when executing. using === helps find the exact absolute value.
//**NOTICE Fig 3.1** - The blank "" marks is important because they are also identifiable (Means User entered an empty value).

    //Question #1 - What does HTML stand for? (IF/ELSE IF/ELSE)
    if (answer1 === "Hypertext Markup Language"){
        document.getElementById("answer1").innerHTML = "Correct";
    } 
    //**Fig 3.1  
    else if (answer1 === ""){
        document.getElementById("answer1").innerHTML = "Choose Your Answer";
    }
    else {
        document.getElementById("answer1").innerHTML = "Try Again";
    }

    //Question #2 - What does CSS stand for? (IF/ELSE IF/ELSE)
    if (answer2 === "Cascading Style Sheets"){
        document.getElementById("answer2").innerHTML = "Correct";
    }   
    else if (answer2 === ""){
        document.getElementById("answer2").innerHTML = "Choose Your Answer";
    }
    else {
        document.getElementById("answer2").innerHTML = "Try Again";
    }

    //Question #3 - Which one of these is NOT a coding language? (SWITCH)
    switch (answer3){

        case "UI/UX Design":
            document.getElementById("answer3").innerHTML = "Correct";
        break;
        case "":
            document.getElementById("answer3").innerHTML = "Choose Your Answer";
        break;
        default:
            document.getElementById("answer3").innerHTML = "Try Again";
        }
});