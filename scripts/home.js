function getCaptchaResponse() {
    var response = grecaptcha.getResponse();

    if (response.length == 0) {
        $("#g-recaptcha-error").show(0);
    } else {
        alert("Continuar con el envió del formulario");
    }
}

//Metodos del captcha
function verifyCaptcha() {
    $("#g-recaptcha-error").hide(0);
}

$("#submitForm").click(function () {
    getCaptchaResponse();
});


//inicializar menu select
$(document).ready(function () {
    $('select').formSelect();
});

//Inicializar documento que modifica un valor
$(document).ready(function () {
    //valorEtiqueta = $('#divID').val();
    //console.log(valorEtiqueta)
    $('#divID').find('h5').eq(2).html('65');
});

//modificacion
$(document).ready(function () {
    $('#botonModificacion').click(function () {
        poscVal = $('#posicion').val();
        textVal = $('#texto').val();
        if (textVal == '') {
            textVal = "loren impsum"
        }
        if (poscVal == "") {
            alert("la posicion no puede estar vacia")
        }
        $('#divID').find('h5').eq(poscVal).html(textVal);
        $('#texto').val('');
        $('#posicion').val('');
    })
})

//agregar
$(document).ready(function () {
    $('#botonAgregar').click(function () {
        textVal = $('#textoAgregar').val();
        if (textVal == '') {
            textVal = "loren impsum"
        }
        $('#divID').append('<h5>'+textVal+'</h5>');
        alert(textVal);
        $('#texto').val('');
    })
})

//eliminar
$(document).ready(function () {
    $('#botonEliminar').click(function () {
        poscEliminar = $('#posicionEliminar').val();
        if (poscEliminar == '') {
            alert("No puede estar vacio");
        }
        $('#divID').find('h5').eq(poscEliminar).remove();
        $('#posicionEliminar').val('');
    })
})

//inputs mostrar en base al select
$(document).ready(function(){
    $('#seleccion').on("change", function(){
        seleccionVal = $('#seleccion').val();
        if(seleccionVal == 2){
            $("#editar").css('display','contents');
            $("#agregar").css('display','none');
            $("#eliminar").css('display','none');
        }
        if(seleccionVal == 1){
            $("#agregar").css('display','contents');
            $("#editar").css('display','none');
            $("#eliminar").css('display','none');
        }
        if(seleccionVal == 3){
            $("#agregar").css('display','none');
            $("#editar").css('display','none');
            $("#eliminar").css('display','contents');
        }
    })
})