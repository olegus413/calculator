window.onload = function () {
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let delit = document.getElementById('delit');
    let umnojit = document.getElementById('umnojit');
    let result;
    let num1;
    let num2;
    let prom = 0;

    function vvod() {
        num1 = Number(document.getElementById('num1').value);
        num2 = Number(document.getElementById('num2').value);
    }

    function vivod() {
        document.getElementById('prom').innerHTML = prom;
        document.getElementById('result').innerHTML = result;
    }

    clear.onclick = function () {
        num1 = 0;
        num2 = 0;
        prom = 0;
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('prom').innerHTML = '';
        document.getElementById('result').innerHTML = '';
    }

    plus.onclick = function () {
        vvod();
        result = num1 + num2;
        prom = prom + num2;
        vivod();
    }

    minus.onclick = function () {
        vvod();
        result = num1 - num2;
        prom = prom - num2;
        vivod()
    }

    umnojit.onclick = function () {
        vvod();
        result = num1 * num2;
        prom = prom * num2;
        vivod();
    }

    delit.onclick = function () {
        vvod();
        if (num1 === 0 || num2 === 0) {
            document.getElementById('vivod').innerHTML = 'Введите корректные данные';
        } else {
            result = num1 / num2;
            prom = prom / num2;
            vivod();
        }
    }


}