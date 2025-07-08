let firstOperand;
let secondOperand;
let operator = "";
let result;

const buttonContainer = document.querySelector(".buttonContainer");
const display = document.querySelector(".display");




function addition(firstOperand , secondOperand) {
    return firstOperand + secondOperand;
}

function subtraction(firstOperand , secondOperand) {
    return firstOperand - secondOperand;
}

function multiplication(firstOperand , secondOperand) {
    return firstOperand * secondOperand;
}

function division(firstOperand , secondOperand) {
    return firstOperand / secondOperand;
}

function operate(string , operator){
    let arr = string.split(operator);
    let firstOperand = Number(arr[0]);
    let secondOperand = Number(arr[1]);
    let bothHasDot = ((arr[0].includes(".")) && (arr[1].includes(".")));
    let answer;
    switch(operator){
        case "+":
            answer = firstOperand + secondOperand;
            return (bothHasDot) ? Math.round(answer * 10)/10 : answer;
            break;
        case "-":
            answer = firstOperand - secondOperand;
            return (bothHasDot) ? Math.round(answer * 10)/10 : answer;
            break;
        case "*":
            answer = firstOperand * secondOperand;
            return (bothHasDot) ? Math.round(answer * 10)/10 : answer;
            break;
        case "/":
            if(secondOperand === 0){
                return "Division by zero not possible";
            } else{
                answer = firstOperand / secondOperand;
                return (bothHasDot) ? Math.round(answer * 10)/10 : answer;
            } 
            break;
    }
}

buttonContainer.addEventListener("click" , (event)=>{
    let targetName = event.target.className;

    let displayText = display.textContent
    let hasOperator = (displayText.includes("+") || displayText.includes("-") || displayText.includes("*") || displayText.includes("/"));
    let arr = displayText.split(operator);
    let hasTwoOperands = (arr.length === 2)
    let justEvaluated;
    
    switch(targetName) {
        case "backspace symbol":
            displayText = displayText.slice(0,-1);
            break;
        case "clearAll symbol":
            displayText = "";
            operator = "";
            result = null;
            break;
        case "seven number":
            displayText = justEvaluated ? "7" : displayText + "7";
            justEvaluated = false;
            break;
        case "eight number":
            displayText = justEvaluated ? "8" : displayText + "8";
            justEvaluated = false;
            break;
        case "nine number":
            displayText = justEvaluated ? "9" : displayText + "9";
            justEvaluated = false;
            break;
        case "divide symbol":
            if(hasTwoOperands){
                result = operate(displayText, operator);
                operator = "/";
                displayText = `${result}` + operator;
            }else{
                operator = "/"
                displayText = (hasOperator) ? displayText.slice(0,-1) + "/" : displayText + "/";
            }
            break;
        case "four number":
            displayText = justEvaluated ? "4" : displayText + "4";
            justEvaluated = false;
            break;
        case "five number":
            displayText = justEvaluated ? "5" : displayText + "5";
            justEvaluated = false;
            break;
        case "six number":
            displayText = justEvaluated ? "6" : displayText + "6";
            justEvaluated = false;
            break;
        case "asterisk symbol":
            if(hasTwoOperands){
                result = operate(displayText, operator);
                operator = "*";
                displayText = `${result}` + operator;
            }else{
                operator = "*"
                displayText = (hasOperator) ? displayText.slice(0,-1) + "*" : displayText + "*";
            }
            break;
        case "one number":
            displayText = justEvaluated ? "1" : displayText + "1";
            justEvaluated = false;
            break;
        case "two number":
            displayText = justEvaluated ? "2" : displayText + "2";
            justEvaluated = false;
            break;
        case "three number":
            displayText = justEvaluated ? "3" : displayText + "3";
            justEvaluated = false;
            break;
        case "minus symbol":
            if(hasTwoOperands){
                result = operate(displayText, operator);
                operator = "-";
                displayText = `${result}` + operator;
            }else{
                operator = "-"
                displayText = (hasOperator) ? displayText.slice(0,-1) + "-" : displayText + "-";
            }
            break;
        case "dot number":
            if((arr.length === 2) && arr[1].includes(".")){
                displayText = displayText.slice(0);
            }else if((arr.length === 2) && !(arr[1].includes("."))){
                displayText = displayText + "."
            }else{
                displayText = (displayText.includes(".")) ? displayText : displayText + ".";
            }
            break;
        case "zero number":
            displayText = displayText + "0";
            break;
        case "equals":
            if(hasOperator && hasTwoOperands){
                result = operate(displayText, operator);
                operator = "";
                displayText = result;
                justEvaluated = true;
            }
            else{
                displayText = displayText.slice(0);
            }
            break;
        case "plus symbol":
            if(hasTwoOperands){
                result = operate(displayText, operator);
                operator = "+";
                displayText = `${result}` + operator;
            }else{
                operator = "+"
                displayText = (hasOperator) ? displayText.slice(0,-1) + "+" : displayText + "+";
            }
            break;
    }
    display.textContent = displayText;
})

document.addEventListener("keydown", (event) => {
    const key = event.key;

    const keyToClass = {
        "0": "zero number",
        "1": "one number",
        "2": "two number",
        "3": "three number",
        "4": "four number",
        "5": "five number",
        "6": "six number",
        "7": "seven number",
        "8": "eight number",
        "9": "nine number",
        ".": "dot number",
        "+": "plus symbol",
        "-": "minus symbol",
        "*": "asterisk symbol",
        "/": "divide symbol",
        "Enter": "equals",
        "=": "equals",
        "Backspace": "backspace symbol",
        "Escape": "clearAll symbol"
    };

    const className = keyToClass[key];

    if (!className) return; // Key is not mapped to any button

    const buttonList = document.querySelectorAll("button");

    let buttonToClick = null;

    buttonList.forEach(btn => {
        let classes = [...btn.classList]

        if (classes.join(' ') === className) {
            buttonToClick = btn;
        }
    });

    if (buttonToClick) buttonToClick.click(); // simulate a click
});