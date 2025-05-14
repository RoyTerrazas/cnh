$(function () {

    $('#registerForm').submit(function (event) {
        event.preventDefault();
        alert("sfss");
        /*var formData = {
            'name': $('input[id=name]').val(),
            'age': $('input[id=age]').val()
        };*/
        var data = $('#registerForm').serialize();
        console.log(data);
        $.post("ventana_modal_borrar.cshtml", data)
        .done(function (data) {
            //Lista se crea en JavaScript
            console.log(data);
            $("#grupo").text(data);
            setTimeout(function () {
                $('#modalAddUser').modal('hide');
            }, 1000);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR)
        });
    });

  
    $('#modalAddUser').on('hidden.bs.modal', function (event) {
        $('#registerForm').trigger('reset').show();
    });
});