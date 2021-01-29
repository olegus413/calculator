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
        let x = document.getElementById('arr').value;
        if (x === null || x === "") {
            alert(" вы здесь если не ввели число \n                     или \n потому что хотите поменять знак действия");
            return false;
        } else {
            arr.push(Number(document.getElementById('arr').value));
            document.getElementById('arr').value = '';
        }
    }


    function vivod() {
        document.getElementById('result').innerHTML = result;
        history = arr.join('');
        document.getElementById('history').innerHTML = history;
    }


    function forHist() {
        history = arr.join('');
        document.getElementById('history').innerHTML = history;

        /*if (history[history.length - 1] !== 'string') {
            history.push(operation);

        } else {
            history.pop();
        }
        history = history.join('');
        document.getElementById('history').innerHTML = history;*/
    }


    function forDeistv() {
        vvod();

        if (arr[arr.length - 1] !== 'string') {
            arr.push(operation);
            operation = '';
        } else {
            arr.pop();
        }
        forHist();
    }


    clear.addEventListener('click', function (e) {
        arr = [];
        history =[];
        num1 = 0;
        num = 0;
        result = 0;
        document.getElementById('result').innerHTML = '';
        document.getElementById('history').innerHTML = '';
    })


    plus.addEventListener("click", function (e) {
        operation = '+';
        forDeistv();
    })

    minus.addEventListener("click", function (e) {
        operation = '-';
        forDeistv();
    })

    umnojit.addEventListener("click", function (e) {
        operation = '*';
        forDeistv();
    })

    delit.addEventListener("click", function () {
        operation = '/';
        forDeistv();
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