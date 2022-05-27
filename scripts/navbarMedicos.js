/*Obtenemos el valor de la ruta*/
var view = $(".hiddenView").attr("id");
console.log(view);

/*En base al valor de view es el breadcrumb que mostraremos*/
if(view == "logMedicos"){
    $("#breadcrumbLogMedicos").show(0);
}else if(view == "citasPendientesMedicos"){
    $("#breadcrumbCitasPendientesMedicos").show(0);
}else if(view == "citasCanceladasMedicos"){
    $("#breadcrumbCitasCanceladasMedicos").show(0);
}

$( document ).ready(function(){
    $(".dropdown-trigger").dropdown();
})