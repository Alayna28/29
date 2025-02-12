// clears the calculator display
function clearScreen() {
    document.getElementById("result").value = "";
}
//Append the clicked button's value to the display
function setScreenValue(value) {
    document.getElementById("result").value += value;
}
//calculators and display the result
function calculateResult() {
    const resultElement =
    document.getElementById("result");
    const expression = resultElement.value.trim();
}
// check for empty input
if (expression === '') {

    resultElement.value = 'Enter an expression';
    return;
}
//evaluate expression and handle errors
try {
    resultElement.value = eval(expression);
} catch (e) {
    resultElement.value = 'Invalid expression';
}