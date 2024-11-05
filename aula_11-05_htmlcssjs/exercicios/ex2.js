var dataAtual = new Date();
horas = dataAtual.getHours();
minutos = dataAtual.getMinutes();
segundos = dataAtual.getSeconds();

function greeting() {
    if (horas > 4 && horas < 13) {
        document.write("BOM DIA!<br>")
    }
    else if (horas > 12 && horas < 19) {
        document.write("BOA TARDE!<br>")
    }
    else {
        document.write("BOA NOITE!<br>")
    }
}

function hour() {
    document.write(`São ${horas}:${minutos}:${segundos}`)
}

greeting();
hour();