const firstNumber = +prompt("Enter the first number");
const secondNumber = +prompt("Enter the second number");
const operator = prompt("Enter +, -, *, /");
function calcResult(firstNumber, secondNumber, operator) {
    return eval(`${firstNumber}` + operator + `${secondNumber}`);
}
alert(calcResult(firstNumber, secondNumber, operator));