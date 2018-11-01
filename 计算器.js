const args = process.argv.slice(2);

let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

var result = 0;

switch (operator) {
    case "+":
        result = parseFloat(parameter1) + parseFloat(parameter2);
        break;
    case "-":
        result = parseFloat(parameter1) - parseFloat(parameter2);
        break;
    case "*":
    case "×":
        result = parseFloat(parameter1) * parseFloat(parameter2);
        break;
    case "/":
    case "÷":
        result = parseFloat(parameter1) / parseFloat(parameter2);
        break;
}

console.log(result);