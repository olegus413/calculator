window.onload = function () {
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let delit = document.getElementById('delit');
    let umnojit = document.getElementById('umnojit');
    let equal = document.getElementById('equal');
    let clear = document.getElementById('clear');
    let result;
    let prom = 0;
    let oper;
    //let deistv = [];
    let promejut = []
    let num = [];

    function vvod() {
        num.push(Number(document.getElementById('num').value));

    }

    /*function history() {
        promejut.push(num, oper);
        document.getElementById('history').innerHTML = promejut.join(' ');

    }*/

    function postOperHist() {
        promejut.push(num);
        document.getElementById('history').innerHTML = promejut.join(' ');

    }

    function vivod() {
        document.getElementById('prom').innerHTML = prom;
        document.getElementById('result').innerHTML = result;
        //deistv.push(num, ' = ', result);
    }

    clear.addEventListener('click', function (e) {
        num = 0;
        prom = 0;
        document.getElementById('num').value = '';
        document.getElementById('prom').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('history').innerHTML = '';
    })


    plus.addEventListener("click", function (e) {
        oper = '+';
        vvod();
        document.getElementById('num').value = '';
        //history();
    })

    minus.addEventListener("click", function (e) {
        oper = '-';
        vvod();
        document.getElementById('num').value = '';
       // history();
    })

    umnojit.addEventListener("click", function (e) {
        oper = '*';
        vvod();
        document.getElementById('num').value = '';
      // history();
    })

    delit.addEventListener("click", function () {
        if (num === 0 || num[num.length - 1] === 0) {
            document.getElementById('vivod').innerHTML = 'Введите корректные данные';
        } else {
            oper = '/';
            vvod();
        }
        document.getElementById('num').value = '';
      // history();
    })


    equal.addEventListener('click', function (e) {
        console.log(oper);
        if (oper === '+') {
            vvod();
            result = num + num[num.length - 1];
            console.log(num);
            console.log(result);
        } else if (oper === '-') {
            vvod();
            prom = num - num[num.length - 1];
        } else if (oper === '*') {
            vvod();
            prom = num + num[num.length - 1];
        } else if (oper === '/') {
            vvod();

            prom = num / num[num.length - 1];
        }
        vivod();

    })


}