function isTelValid() {
    var regex = /^(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}$/;
    var num = document.getElementById("num").value;

    if (regex.test(num)) {
        alert(`${num} é um número de telefone válido`);
    }
    else {
        alert(`${num} não é um número de telefone válido`);
    }
}