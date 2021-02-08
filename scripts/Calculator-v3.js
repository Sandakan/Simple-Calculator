var input = "";
var areThereAnyOpenBrackets = false;


function addNum(num) {
    if(num=="."){
        if (input[input.length - 1] == undefined || input[input.length - 1] == "." || /\+\-\/\*\^/g.test(input[input.length - 1])) {}
        else{
            input += num; 
        }
    }else{
        input += num;
    }
    document.getElementById("display1").value = input;
}

function addOperator(operator) {
    if (input[input.length - 1] !== "\+" && input[input.length - 1] !== "\-" && input[input.length - 1] !== "\*" && input[input.length - 1] !== "\/" && input[input.length-1] !== "^" && input !== "") {
        input += operator;
    }
    document.getElementById("display1").value = input;
}

function addPower() {
    if (input == "" || input[input.length -1] == "^"){}
    else{
        input += "^";
    }
    document.getElementById("display1").value = input;
}

function deleteLastNumber() {
    input = input.substring(0, input.length - 1);
    document.getElementById("display1").value = input;
    if (areThereAnyOpenBrackets) areThereAnyOpenBrackets = false;
    else areThereAnyOpenBrackets = true;
    if (/\+\-\*\/\^/gi.test(input[input.length - 1])) calculator();
}

function clearAll() {
    input = "";
    areThereAnyOpenBrackets = false;
    document.getElementById("display1").value = "";
    document.getElementById("display").value = "";
}

function addBrackets() {
    if (!areThereAnyOpenBrackets) {
        if (input[input.length - 1] !== "\(" && input !== "") {
            input += "\*\(";
            areThereAnyOpenBrackets = true;
        } else {
            input += "\(";
            areThereAnyOpenBrackets = true;
        }
    } else if (input[input.length - 1] !== "\(" && (input[input.length - 1] !== "\+" && input[input.length - 1] !== "\-" && input[input.length - 1] !== "\*" && input[input.length - 1] !== "\/")) {
        input += "\)";
        areThereAnyOpenBrackets = false;
    }
    document.getElementById("display1").value = input;
}

function addPlusMinus() {
    input += "\-";
    document.getElementById("display1").value = input;
}

function calculator() {
    let answer =  evaluate(input);
    if (answer !== "undefined") document.getElementById("display").value = "= " + answer;
    else document.getElementById("display").value = "";
}

//TODO Make this to work on precentages, roots, powers too.