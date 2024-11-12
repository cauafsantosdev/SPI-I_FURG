function getMinMax() {
    for (i=0; i < 5; i++) {
        var n = prompt("Insira um número: ");
        n = parseInt(n)
        
        if (i == 0) {
            max = n;
            min = n;
        }
        else if (n > max) {
            max = n;
        }
        else if (n < min) {
            min = n;
        }
    }
    document.write(`O menor valor digitado foi ${min} e o maior foi ${max}`);
}

getMinMax();