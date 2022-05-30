// Calculating with Functions
function operation(string,operand1) {
    if(string.slice(0,-1)=="plus") {
            return (operand1+parseInt(string.slice(-1)));
        }
    else if(string.slice(0,-1)=="times") {
            return (operand1*parseInt(string.slice(-1)));
        }
    else if(string.slice(0,-1)=="minus") {
            return (operand1-parseInt(string.slice(-1)));
        }
    else if(string.slice(0,-1)=="dividedBy") {
            return (Math.floor(operand1/parseInt(string.slice(-1))));
        }
}
function zero(operator) {
    return (operator==undefined ? 0 : operation(operator,0));
}
function one(operator) {
    return (operator==undefined ? 1 : operation(operator,1));
}
function two(operator) {
    return (operator==undefined ? 2 : operation(operator,2));
}
function three(operator) {
    return (operator==undefined ? 3 : operation(operator,3));
}
function four(operator) {
    return (operator==undefined ? 4 : operation(operator,4));
}
function five(operator) {
    return (operator==undefined ? 5 : operation(operator,5));
}
function six(operator) {
    return (operator==undefined ? 6 : operation(operator,6));
}
function seven(operator) {
    return (operator==undefined ? 7 : operation(operator,7));
}
function eight(operator) {
    return (operator==undefined ? 8 : operation(operator,8));
}
function nine(operator) {
    return (operator==undefined ? 9 : operation(operator,9));
}

function minus(operand2) {
    return "minus"+operand2;
}
function dividedBy(operand2) {
    return "dividedBy"+operand2;
}
function plus(operand2) {
    return "plus"+operand2;
}
function times(operand2) {
    return "times"+operand2;
}