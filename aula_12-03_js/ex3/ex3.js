$(document).ready(function() {
    $('#user_input').on('input', function() {
        var texto = $(this).val();
        $('#clone').val(texto);
    });
});