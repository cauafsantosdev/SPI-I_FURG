function evensBetween() {
    soma = 0

    for (i=85; i < 901; i++) {
        if (i % 2 == 0) {
            document.write(i + "<br>")
            soma += i
        }
    }
    document.write(`<br>A soma dos pares entre 85 e 901 é ${soma}`)
}

evensBetween();