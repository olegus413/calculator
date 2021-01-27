window.onload = function () {
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let delit = document.getElementById('delit');
    let umnojit = document.getElementById('umnojit');
    let equal = document.getElementById('equal');
    let clear = document.getElementById('clear');
    let arr = [];
    let result;
    let operation = '';
    let num1 = 0;
    let num = 0;
    let history = [];

    function vvod() {
        arr.push(Number(document.getElementById('arr').value));
        document.getElementById('arr').value = '';
    }

    function vivod() {
        document.getElementById('result').innerHTML = result;
        history = arr.join('');
        document.getElementById('history').innerHTML = histor;
    }

    clear.addEventListener('click', function (e) {
        arr = [];
        num1 = 0;
        num = 0;
        result = 0;
        document.getElementById('result').innerHTML = '';
        document.getElementById('history').innerHTML = '';
    })


    plus.addEventListener("click", function (e) {
        operation = '+';
        vvod();
        arr.push(operation);
        operation = '';
    })

    minus.addEventListener("click", function (e) {
        operation = '-';
        vvod();
        arr.push(operation);
        operation = '';
    })

    umnojit.addEventListener("click", function (e) {
        operation = '*';
        vvod();
        arr.push(operation);
        operation = '';
    })

    delit.addEventListener("click", function () {
        operation = '/';
        vvod();
        arr.push(operation);
        operation = '';
    })


    equal.addEventListener('click', function (e) {
        vvod();
        for (let i = 0; i < arr.length; i++) {

            if (typeof (arr[i]) === 'string') {

                operation = arr[i];
            } else {

                num1 = num;
                num = arr[i];
                
                if (operation === '+') {
                    num = num + num1;
                } else if (operation === '-') {
                    num = num1 - num;
                } else if (operation === '*') {
                    num = num * num1;
                } else if (operation === '/') {
                    num = num1 / num;
                }

            }
            result = num;
        }
        vivod();
    })
}