for (i = 0; i < 10; i++) {
    document.write(i);
    document.write("<br>");
}

var pessoa = {fname: "João", lname: "da Silva", age: 25};
var txt = "";

for (x in pessoa) {
    txt = txt + pessoa[x] + " ";
}

document.write("<br>" + txt + "<br><br>");

var n = 0;

while (n < 5) {
    out = "O número é " + n + "<br>";
    document.write(out);
    n++;
}

document.write("<br>");

var x = 0;

do {
    out = "O número é " + x + "<br>";
    document.write(out);
    x++
}
while (x < 5);