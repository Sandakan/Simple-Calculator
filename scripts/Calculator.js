var output = "";
var allowDot = true;

function isLastAnOperator() {
    var screen = document.getElementById("display").value;
    var match = /[\+\-\*\/\.]/;
    if (match.test(screen.charAt(screen.length - 1)) && match.test(output.charAt(output.length - 1))) {

        return true;
    } else {
        return false;
    }
}

function addNum(x) {
    document.getElementById("display").value += x;
    output += x;

}

function addSign(sign) {
    
    if (!isLastAnOperator() && document.getElementById("display").value !== "") {
        if (sign == "addition") {
            document.getElementById("display").value += "+";
            output += "+";
        } else if (sign == "substraction") {
            document.getElementById("display").value += '-';
            output += " - ";
        } else if (sign == "multiplication") {
            document.getElementById("display").value += '*';
            output += " * ";
        } else if (sign == "division") {
            document.getElementById("display").value += '/';
            output += " / ";
        } else if (sign == "percentage") {
            document.getElementById("display").value += '%';
            output += " % ";
        }
    } else if (sign == "plusminus") {
        document.getElementById("display").value += '-';
        output += " - ";
    }

    if (sign == "dot") {
        if (allowDot && !isLastAnOperator()) {
            if (document.getElementById("display").value == '') {
                document.getElementById("display").value += '.';
                output += '.';
            } else {
                document.getElementById("display").value += '0.';
                output += '0.';
            }
            allowDot = false;
        }

    }

}


function calculator() {
    try {
        if (document.getElementById("display").value !== "") {
            document.getElementById("display").value = eval(output);
        }
        allowDot = false;
    } catch (e) {
        alert("An error occurred..!!!\n" + "Error \: " + e + "\nOutput \: " + output);

    }
}

function clearAll() {
    document.getElementById("display").value = '';
    output = "";
    allowDot = true;
}

function deleteLastNumber() {
    var x = document.getElementById("display").value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        document.getElementById("display").value = x;
        output = x;
    }
}

var areThereOpenBrackets = false;

function addBrackets() {
    if (!areThereOpenBrackets) {
        document.getElementById("display").value += "\(";
        output += "\(";
        areThereOpenBrackets = true;
    } else if (areThereOpenBrackets && /\(/.test(output) == true && output.charAt(output.length - 1) !== "\(") {
        document.getElementById("display").value += "\)";
        output += "\)";
        areThereOpenBrackets = false;
    } else if (/\(/.test(output) == false) {
        areThereOpenBrackets = false;
    }
}