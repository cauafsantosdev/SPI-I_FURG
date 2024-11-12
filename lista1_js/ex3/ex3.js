function numbersBetween() {
    x = parseInt(document.getElementById("x").value);
    y = parseInt(document.getElementById("y").value);
    
    for (x; x <= y; x++) {
        document.writeln(x + "<br>")
    }
}