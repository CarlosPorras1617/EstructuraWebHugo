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
//Inicializar documento que modifica un valor
$(document).ready(function () {
    $('#divID').find('h5').eq(2).html('65');
    obtenerValoresSelect();
});
//modificación color
$(document).ready(function () {
    $('#botonAcciones').click(function () {
        poscVal = $('#AccionesSelect').val();
        colorElegido = $('#seleccionColor').val();
        $('#divID').find('h5').eq(poscVal).css('color', colorElegido);
        obtenerValoresSelect();
    })
})
//scroll funcion
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 50 && scroll <= 90) {
        alert('Nivel de scroll ' + scroll);
    }
});
//modificacion
$(document).ready(function () {
    $('#botonModificacion').click(function () {
        poscVal = $('#PocisionSelect').val();
        textVal = $('#textoEditar').val();
        if (textVal == '') {
            textVal = "loren impsum"
        }
        if (poscVal == "") {
            alert("la posicion no puede estar vacia")
        }
        $('#divID').find('h5').eq(poscVal).text(textVal);
        $('#texto').val('');
        $('#posicion').val('');
        obtenerValoresSelect();
    })
})
//agregar
$(document).ready(function () {
    $('#textoAgregar').keypress(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        console.log(code);
        if (code == 45) {
            textVal = $('#textoAgregar').val();
            if (textVal == '') {
                textVal = "loren impsum"
            }
            $('#divID').append('<h5>' + textVal + '</h5>');
            $('#texto').val('');
            obtenerValoresSelect();
        }
    })
    /*$('#botonAgregar').click(function () {
        textVal = $('#textoAgregar').val();
        if (textVal == '') {
            textVal = "loren impsum"
        }
        $('#divID').append('<h5>' + textVal + '</h5>');
        $('#texto').val('');
        obtenerValoresSelect();
    })*/
})
//eliminar
$(document).ready(function () {
    $('#botonEliminar').click(function () {
        poscEliminar = $('#PocisionSelectEliminar').val();
        if (poscEliminar == '') {
            alert("No puede estar vacio");
        }
        $('#divID').find('h5').eq(poscEliminar).remove();
        $('#posicionEliminar').val('');
        obtenerValoresSelect();
    })
})
//inputs mostrar en base al select
$(document).ready(function () {
    $('#seleccion').on("change", function () {
        //Animacion oculta y muestra los h5
        $('#divID').fadeOut(800);
        $('#divID').fadeIn(400);
        seleccionVal = $('#seleccion').val();
        if (seleccionVal == 2) {
            $("#editar").css('display', 'contents');
            $("#agregar").css('display', 'none');
            $("#eliminar").css('display', 'none');
            $("#acciones").css('display', 'none');
        }
        if (seleccionVal == 1) {
            $("#agregar").css('display', 'contents');
            $("#editar").css('display', 'none');
            $("#eliminar").css('display', 'none');
            $("#acciones").css('display', 'none');
        }
        if (seleccionVal == 3) {
            $("#agregar").css('display', 'none');
            $("#editar").css('display', 'none');
            $("#acciones").css('display', 'none');
            $("#eliminar").css('display', 'contents');
        }
        if (seleccionVal == 4) {
            $("#agregar").css('display', 'none');
            $("#editar").css('display', 'none');
            $("#eliminar").css('display', 'none');
            $("#acciones").css('display', 'contents');
        }
    })
})

function obtenerValoresSelect() {
    $('#PocisionSelectEliminar').empty();
    $('#PocisionSelect').empty();
    $('#AccionesSelect').empty();
    var outputConsultar = $('#divID').find('h5')
    for (let index = 0; index < outputConsultar.length; index++) {
        const element = outputConsultar[index].innerHTML;
        console.log(element);
        $('#AccionesSelect').append('<option value=' + index + '>' + element + '</option>');
        $('#PocisionSelectEliminar').append('<option value=' + index + '>' + element + '</option>');
        $('#PocisionSelect').append('<option value=' + index + '>' + element + '</option>');
    }
    $('select').formSelect();
}