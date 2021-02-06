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


    function vvod() {
        let x = document.getElementById('number').value;
        if (x === null || x === "") {
            alert(" вы здесь если не ввели число \n                     или \n потому что хотите поменять знак действия");
            return false;
        } else {
            arr.push(Number(document.getElementById('number').value));
            document.getElementById('number').value = '';
        }
    }


    function vivod() {
        document.getElementById('result').innerHTML = result;

        document.getElementById('history').innerHTML = arr.join('');
    }


    function forDeistvAndHist() {
        vvod();
        if (typeof arr[arr.length - 1] !== 'string') {
            arr.push(operation);
        } else {
            arr[arr.length - 1] = operation;
        }
        operation = '';
        document.getElementById('history').innerHTML = arr.join('');

    }

    function clearFunc() {
        arr = [];

        num1 = 0;
        num = 0;
        result = 0;
        operation = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('history').innerHTML = '';
        document.getElementById('number').value = '';
    }


    clear.addEventListener('click', function (e) {
        clearFunc();
    })


    plus.addEventListener("click", function (e) {
        operation = '+';
        forDeistvAndHist();
    })

    minus.addEventListener("click", function (e) {
        operation = '-';
        forDeistvAndHist();
    })

    umnojit.addEventListener("click", function (e) {
        operation = '*';
        forDeistvAndHist();
    })

    delit.addEventListener("click", function () {
        operation = '/';
        forDeistvAndHist();
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
                    if (num === 0) {
                        alert('на ноль делить нельзя');
                        clearFunc();
                        return false;
                    } else {
                        num = num1 / num;
                    }

                }

            }
            result = num;
        }
        vivod();
    })

}