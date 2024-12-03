$(document).ready(function () {
    $("#submit").click(function() {
        var name = document.getElementById("name").value;
        $("p").text(`Seu nome é ${name}`);
    })
})