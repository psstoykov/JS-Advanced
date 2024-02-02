function calculator() {
    let num1Ref = document.getElementById('num1');
    let num2Ref = document.getElementById('num2');
    let resultRef = document.getElementById('result');


    return {
        init: (selector1, selector2, resultSelector) => {
            let num1 = num1Ref.value = Number(selector1)
            num2Ref.value = Number(selector2)

        },
        add: () => {
            resultRef.textContent = num1Ref.value
        },
        subtract: () => {

        }
    }


}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 