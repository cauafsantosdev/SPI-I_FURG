$(document).ready(function () {
    $("#green").hover(
        function () {
            $(this).css("color", "red"); 
            $("#red").css("color", "green"); 
        },
        function () {
            $(this).css("color", "green");
            $("#red").css("color", "red"); 
        }
    );
});