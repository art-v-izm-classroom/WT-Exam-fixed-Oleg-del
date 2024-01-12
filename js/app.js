document.addEventListener('DOMContentLoaded', function () {
    var op1Input = document.getElementById('op1');
    var op2Input = document.getElementById('op2');
    var resultElement = document.getElementById('res');

    var addButton = document.getElementById('add-button');
    var subButton = document.getElementById('sub-button');
    var mulButton = document.getElementById('mul-button');

    addButton.addEventListener('click', function () {
        calculateResult('+');
    });

    subButton.addEventListener('click', function () {
        calculateResult('-');
    });

    mulButton.addEventListener('click', function () {
        calculateResult('*');
    });

    function calculateResult(operator) {
        var operand1 = parseFloat(op1Input.value);
        var operand2 = parseFloat(op2Input.value);

        if (isNaN(operand1) || isNaN(operand2)) {
            resultElement.textContent = 'Invalid input';
            return;
        }

        var result;
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            default:
                result = 'Invalid operator';
        }

        // Display the result
        resultElement.textContent = 'Result: ' + result;
    }
});/* Put some script here */
