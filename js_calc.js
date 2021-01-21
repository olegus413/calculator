window.onload = function () {
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let delit = document.getElementById('delit');
    let umnojit = document.getElementById('umnojit');
    let equal = document.getElementById('equal');
    let clear = document.getElementById('clear');
    let result = 0;
    let oper;
    let num = [];

    function vvod() {
        num.push(Number(document.getElementById('num').value));
        document.getElementById('num').value = '';
    }


    function vivod() {
        document.getElementById('result').innerHTML = result;
    }

    clear.addEventListener('click', function (e) {
        num = 0;
        document.getElementById('num').value = '';
        document.getElementById('prom').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('history').innerHTML = '';
    })


    plus.addEventListener("click", function (e) {
        oper = '+';
        vvod();
    })

    minus.addEventListener("click", function (e) {
        oper = '-';
        vvod();
    })

    umnojit.addEventListener("click", function (e) {
        oper = '*';
        vvod();
    })

    delit.addEventListener("click", function () {
        if (num[num.length] === 0 || num[num.length - 1] === 0) {
            document.getElementById('vivod').innerHTML = 'Введите корректные данные';
        } else {
            oper = '/';
            vvod();
        }
    })


    equal.addEventListener('click', function (e) {
        if (oper === '+') {
            vvod();
            result = num[num.length - 2] + num[num.length - 1];
            oper = '';
        } else if (oper === '-') {
            vvod();
            result = num[num.length - 2] - num[num.length - 1];
            oper = '';
        } else if (oper === '*') {
            vvod();
            result = num[num.length - 2] * num[num.length - 1];
            oper = '';
        } else if (oper === '/') {
            vvod();
            result = num[num.length - 1] / num[num.length];
            oper = '';
        }
        vivod();

    })


}