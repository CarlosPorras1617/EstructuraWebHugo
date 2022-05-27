/* El valor de la ruta */
var view = $(".hiddenView").attr("id");
console.log(view);

/*dependiento el valor de la ruta es el broadcrumb que se mostrara */
if(view == "home"){
    $("#breadcrumbHome").show(0);
}else if(view == "login"){
    $("#breadcrumbLogin").show(0);
}

$( document ).ready(function(){
    $(".dropdown-trigger").dropdown();
})
