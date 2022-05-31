function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return addNumbers(num1, num2);
            break;
        case '-':
            return subNumbers(num1, num2);
            break;
        case '*':
            return multiNumbers(num1, num2);
            break;
        case '/':
            return divNumbers(num1, num2);
            break;
        default:
            return NaN;
    }
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subNumbers(num1, num2) {
    return num1 - num2;
}

function multiNumbers(num1, num2) {
    return num1 * num2;
}

function divNumbers(num1, num2) {
    return num1 / num2;
}