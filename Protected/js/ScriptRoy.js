$(function () {





    //ALTAS DE USUARIOS  ojo aqui para postear forma modal
    $('#butonEnviar').on("click", function (event) {
        alert("pressed");
        event.preventDefault();
        
        var formData = {
            'provincia': $('input[id=provincia]').val(),
            'grupo': $('input[id=grupo]').val()
        };
        $.post("hola.cshtml", formData)
        .done(function (data) {
            //Lista se crea en JavaScript 
            memberList();
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