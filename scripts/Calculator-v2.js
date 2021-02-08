var operatorClicked = false;
var dataForDisplay1 = "";
var operatorType = "";
var calFuncData = "";
var calFuncData2 = "";
var result;

function addNum(num) {
    calculator("number",num);
    dataForDisplay1 += num;
    display(null,false);
}
function addOperator(operator) {
    calculator("operator",operator);
    operatorType = operator;
    dataForDisplay1 += operator;
    display(null,false);
}
function display(input ,isTheAnswer ,wantToDisplay){
    if (isTheAnswer) {
        document.getElementById("display").value = input;
    }
    else{

        document.getElementById("display1").value = dataForDisplay1; 
    }
}

function calculator(inputType,input){
    if(inputType=="operator"){
        operatorClicked = true;

    }
    else if(operatorClicked){
        calFuncData2 += input;
        if (operatorType=="\*") {
            result = parseInt(calFuncData) * parseInt(calFuncData2);
            //alert("\n CalFuncData : "+calFuncData+"\n Operator : "+operatorType+"\n CalFuncData2 : "+calFuncData2+"\n Answer : " +result );
            display(result,true);
        }else if (operatorType=="\/") {
            result = parseInt(calFuncData) / parseInt(calFuncData2);
            //alert("\n CalFuncData : "+calFuncData+"\n Operator : "+operatorType+"\n CalFuncData2 : "+calFuncData2+"\n Answer : " +result );
            display(result,true);
        }else if (operatorType=="\+") {
            result = parseInt(calFuncData) + parseInt(calFuncData2);
            //alert("\n CalFuncData : "+calFuncData+"\n Operator : "+operatorType+"\n CalFuncData2 : "+calFuncData2+"\n Answer : " +result );
            display(result,true);
        }else if (operatorType=="\-") {
            result = parseInt(calFuncData) - parseInt(calFuncData2);
            //alert("\n CalFuncData : "+calFuncData+"\n Operator : "+operatorType+"\n CalFuncData2 : "+calFuncData2+"\n Answer : " +result );
            display(result,true);
        }
    }
    else{
        calFuncData += input; 
        display(calFuncData,false);
    }
}

/*var input , secondInput = "";
var calcFuncUsedBefore = false;
var output = 0;

function addNum(num) {  
    input += num;
    //console.log(input);
    document.getElementById("display").value = input;
}
function addOperator(operator) {  
    input += operator;
    //console.log(input);
    document.getElementById("display").value = input;
}
function calculator() {  
    output = eval(input);
    calcFuncUsedBefore = true;
    document.getElementById("display").value = output;
    console.log(input +"\n"+output);
}
*/