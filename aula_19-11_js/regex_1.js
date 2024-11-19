function isNumValid() {
    var regex = /^[+-]?[0-9]+(\.[0-9]+)?$/;
    var n = document.getElementById("n").value;

    if (regex.test(n)) {
        alert(`${n} é um número válido`);
    }
    else {
        alert(`${n} não é um número válido`);
    }
}