//TODO  Make this to work on BODMAS Rules.
//! Using brackets confuses the function.
var funcData;
var funcData2 = "";
var funcData3;
var closeBracketPosition;
var newFuncUsed = false;

function newFunc() {  
    newFuncUsed = true;
    funcData3 =  evaluate(funcData);
}
function bracketsSolver() {

}

function evaluate(parsedInput) {
    var output = 0;
    for (i = 0; i < parsedInput.length; i++) {
        if (parsedInput[i] == "\+") {
            
            if (output == 0) {
                output = parseInt(parsedInput.substring(0, i)) + parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output += parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "\-") {
            if (output == 0) {
                output = parseInt(parsedInput.substring(0, i)) - parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output -= parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "\*") {
            if (output == 0) {
                output = parseInt(parsedInput.substring(0, i)) * parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output *= parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "\/") {
            if (output == 0) {
                output = parseInt(parsedInput.substring(0, i)) / parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output /= parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i] == "\^") {
            if (output == 0) {
                output = parseInt(parsedInput.substring(0, i)) ** parseInt(parsedInput.substring(i + 1, parsedInput.length));
                console.log(output);
            } else {
                output = output ** parseInt(parsedInput.substring(i + 1, parsedInput.length));
            }

        }
        if (parsedInput[i]=="\(") {
            closeBracketPosition = parsedInput.search(/\)/);
            funcData = parsedInput.substring(i+1,closeBracketPosition);
            newFunc();
            funcData2 = parsedInput.replace("\("+funcData+"\)",funcData3);
            alert(funcData2);
            break;
        }
        
    }
    if(!newFuncUsed) return output;
    else return eval(funcData2);
}


//! Decimals are not working.