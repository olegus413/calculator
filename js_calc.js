let op;

function calc() {
    let prom = 0//промежуточное значение
    let result;
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    switch (op) {
        case (num1 && num2 === undefined):
            result = 'введите числа';
            break;
        case '+':
            result = num1 + num2;
            prom = result + prom;
            document.getElementById('prom').innerHTML = prom;
            break;
        case '-':
            result = num1 - num2;
            prom = result - prom;
            document.getElementById('prom').innerHTML = prom;
            break;
        case '*':
            result = num1 * num2;
            prom = result * prom;
            document.getElementById('prom').innerHTML = prom;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2
                prom = result / prom;
                document.getElementById('prom').innerHTML = prom;
            } else {
                result = 'нет ответа';
            }
            break;
        default:
            result = ' выберите действие';
            break;

    }

    document.getElementById('result').innerHTML = result;
}