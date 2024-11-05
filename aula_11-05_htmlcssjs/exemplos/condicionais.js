var n = 11;

if (n < 10) {
    document.write("X é menor que 10");
}
else if (n >= 10 && n <= 20) {
    document.write("X está entre 10 e 20");
}
else {
    document.write("X é maior que 20");
}

var idade = 18;

x = (idade < 10) ? "Menor de idade" : "Maior de idade";
document.write(`<br>${x}`);

var dia = new Date().getDay()

switch (dia) {
    case 0:
        x = "Hoje é domingo";
    break;
    case 1:
        x = "Hoje é segunda";
    break;
    case 2:
        x = "Hoje é terça";
    break;
    case 3:
        x = "Hoje é quarta";
    break;
    case 4:
        x = "Hoje é quinta";
    break;
    case 5:
        x = "Hoje é sexta";
    break;
    case 6:
        x = "Hoje é sábado";
    break;
}

document.write(`<br>${x}`);