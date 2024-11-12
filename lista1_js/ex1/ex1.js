function getAvg() {
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");

    var avg = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value) + parseFloat(n4.value)) / 4;
    alert(`Média: ${avg}`);
}