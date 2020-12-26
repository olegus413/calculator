window.onload = function () {
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let delit = document.getElementById('delit');
    let umnojit = document.getElementById('umnojit');
    let result;
    let num;
    let num2;
    let prom = 0;
    let oper;
    let deistv = [];

    function vvod() {
        num = Number(document.getElementById('num').value);
    }

    function history() {
        deistv.push(num, oper);
        document.getElementById('history').innerHTML = deistv.join(' ');

    }

    function vivod() {
        document.getElementById('prom').innerHTML = prom;
        document.getElementById('result').innerHTML = result;
        deistv.push(num2, ' = ', result);
        document.getElementById('history').innerHTML = deistv.join(' ');

    }

    equal.onclick = function () {
        num2 = Number(document.getElementById('num').value);
        if (oper === '+') {
            result = num + num2;
            prom = num;
            prom = prom + num2;
        } else if (oper === '-') {
            result = num - num2;
            prom = num;
            prom = prom - num2;

        } else if (oper === '*') {
            result = num * num2;
            prom = num;
            prom = prom * num2;
        } else if (oper === '/') {
            result = num / num2;
        }
        vivod();


    }
    clear.onclick = function () {
        num = 0;
        num2 = 0;
        prom = 0;
        document.getElementById('num').value = '';
        document.getElementById('prom').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('history').innerHTML = '';
    }

    plus.onclick = function () {
        vvod();
        oper = '+';
        document.getElementById('num').value = '';
        history();
    }

    minus.onclick = function () {
        vvod();
        oper = '-';
        document.getElementById('num').value = '';
        history();
    }

    umnojit.onclick = function () {
        vvod();
        oper = '*';
        document.getElementById('num').value = '';
        history();
    }

    delit.onclick = function () {
        vvod();
        if (num === 0 || num2 === 0) {
            document.getElementById('vivod').innerHTML = 'Введите корректные данные';
        } else {
            oper = '/';
        }
        document.getElementById('num').value = '';
        history();
    }


}