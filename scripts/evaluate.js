var evalFuncData = "";
var evalRunningFirstTime = true;
var output = 0;

function numbersAfterOperators(position) {
    // TODO build this to separate numbers from operators 
}

function evaluate(input = 0) {

    var parsedInput = input.replace(/\s/gi, "");
    if (!evalRunningFirstTime) {
        input = parsedInput;
        parsedInput = "";
        parsedInput = input.replace(evalFuncData, output);
        alert(evalFuncData + "\n" + output + "\n" + parsedInput);
        output = 0;
    } else {
        evalFuncData = input;
        evalRunningFirstTime = false;
    }
    for (i = 0; i < parsedInput.length; i++) {
        if (parsedInput[i] == "+") {
            if (output == 0) {
                output += parseInt(parsedInput.substring(0, i)) + parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output += parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "-") {
            if (output == 0) {
                output += parseInt(parsedInput.substring(0, i)) - parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output -= parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "*") {
            if (output == 0) {
                output += parseInt(parsedInput.substring(0, i)) * parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output *= parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "/") {
            if (output == 0) {
                output += parseInt(parsedInput.substring(0, i)) / parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output /= parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "*" && parsedInput[i + 1] == "*") {
            if (output == 0) {
                output += parseInt(parsedInput.substring(0, i)) ^ parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                alert(true);
            }

        }


    }

    return output;
}