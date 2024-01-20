function calc() {
    // TODO: sum = num1 + num2
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sign = document.getElementById('sign').value;
    let sum = 0;
    switch (sign) {
        case "+":
            sum = Number(num1) + Number(num2)
            break;
        case "-":
            sum = Number(num1) - Number(num2)
            break;
        case "*":
            sum = Number(num1) * Number(num2)
            break;
        case "/":
            sum = Number(num1) / Number(num2)
            break;
    }
    document.getElementById('sum').value = sum;
}
