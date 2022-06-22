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
        //elimina los valores del select para volverlos a renderizar y no se repitan
        $('#AccionesSelect').find('option').remove();
        obtenerValoresSelect(3);
    })
})

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
        //elimina los valores del select para volverlos a renderizar y no se repitan
        $('#PocisionSelect').find('option').remove();
        obtenerValoresSelect(1);
    })
})

//agregar
$(document).ready(function () {
    $('#botonAgregar').click(function () {
        textVal = $('#textoAgregar').val();
        if (textVal == '') {
            textVal = "loren impsum"
        }
        $('#divID').append('<h5>' + textVal + '</h5>');
        $('#texto').val('');
        //elimina los valores del select para volverlos a renderizar y no se repitan
        $('#PocisionSelect').find('option').remove();
        //obtenerValoresSelect();
    })
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
        //elimina los valores del select para volverlos a renderizar y no se repitan
        $('#PocisionSelectEliminar').find('option').remove();
        obtenerValoresSelect(2);
    })
})

//filtrar
$(document).ready(function () {
    $('#filtrado').change(function () {
        filtrado = $('#filtrado').val();
        console.log(filtrado);
        if (filtrado == 'esconder' || filtrado == 'aparecer') {
            $('#botonFiltrar').attr('disabled', 'disabled');
            $('#valorFiltro').attr('disabled', 'disabled');
            if (filtrado == 'esconder') {
                $('#divID').find('h5').hide();
            } else if (filtrado == 'aparecer') {
                $('#divID').find('h5').show(0);
            }
        }
        if (filtrado == 'especifico' || filtrado == 'lista') {
            $('#botonFiltrar').attr('disabled', false);
            $('#valorFiltro').attr('disabled', false);
        }
        $('#botonFiltrar').click(function () {
            valorFiltro = $('#valorFiltro').val();
            if (filtrado == 'especifico' && valorFiltro != '') {
                if ($('#divID').find('h5').eq(valorFiltro)) {
                    obtenerEspecifico = $('#divID').find('h5').eq(valorFiltro).text();
                    alert(obtenerEspecifico);
                    //$('#divID').find('h5').remove();
                    //$('#divID').append('<h5>' + obtenerEspecifico + '</h5>');
                }else{
                    alert("Ese elemento no existe");
                }


            } else if (filtrado == 'lista' && valorFiltro != '') {
                $('#divID').find('h5').gt(2);

            } else {
                alert("El filtro no puede estar vacio");
            }
        })
    })
})

//inputs mostrar en base al select
$(document).ready(function () {
    $('#seleccion').on("change", function () {
        seleccionVal = $('#seleccion').val();
        if (seleccionVal == 2) {
            $("#editar").css('display', 'contents');
            $("#agregar").css('display', 'none');
            $("#eliminar").css('display', 'none');
            $("#acciones").css('display', 'none');
            $("#filtrar").css('display', 'none');
        }
        if (seleccionVal == 1) {
            $("#agregar").css('display', 'contents');
            $("#editar").css('display', 'none');
            $("#eliminar").css('display', 'none');
            $("#acciones").css('display', 'none');
            $("#filtrar").css('display', 'none');
        }
        if (seleccionVal == 3) {
            $("#agregar").css('display', 'none');
            $("#editar").css('display', 'none');
            $("#acciones").css('display', 'none');
            $("#filtrar").css('display', 'none');
            $("#eliminar").css('display', 'contents');
        }
        if (seleccionVal == 4) {
            $("#agregar").css('display', 'none');
            $("#editar").css('display', 'none');
            $("#eliminar").css('display', 'none');
            $("#filtrar").css('display', 'none');
            $("#acciones").css('display', 'contents');
        }
        if (seleccionVal == 5) {
            $("#agregar").css('display', 'none');
            $("#editar").css('display', 'none');
            $("#eliminar").css('display', 'none');
            $("#acciones").css('display', 'none');
            $("#filtrar").css('display', 'contents');
        }
    })
})

function obtenerValoresSelect(caso) {
    //obtener valores de los output
    //$(document).ready(function () {
    //valorEtiqueta = $('#divID').val();
    //console.log(valorEtiqueta)
    var outputConsultar = $('#divID').find('h5')
    //console.log(outputConsultar);
    for (let index = 0; index < outputConsultar.length; index++) {
        const element = outputConsultar[index].innerHTML;
        console.log(element);
        switch (caso) {
            case 1:
                $('#PocisionSelect').append('<option value=' + index + '>' + element + '</option>');
                break;
            case 2:
                $('#PocisionSelectEliminar').append('<option value=' + index + '>' + element + '</option>');
                break;
            case 3:
                $('#AccionesSelect').append('<option value=' + index + '>' + element + '</option>');
                break;
            default:
                $('#AccionesSelect').append('<option value=' + index + '>' + element + '</option>');
                $('#PocisionSelectEliminar').append('<option value=' + index + '>' + element + '</option>');
                $('#PocisionSelect').append('<option value=' + index + '>' + element + '</option>');
                break;
        }
        $('select').formSelect();
        //console.log(index);
    }
    //});
}