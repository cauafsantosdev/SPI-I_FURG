function myFunction(e) {
    x = e.clientX;
    y = e.clientY;
    coor = "Cordenadas: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML=coor;
}

function clearCoor() {
    document.getElementById("demo").innerHTML="";
}