<?php
$view = $_GET['view'];
?>

<ul id="dropMenuCitasMedicos" class="dropdown-content">
    <li><a class="white-text" href="?view=citasPendientesMedicos">Citas Pendientes</a></li>
    <li class="divider"></li>
    <li><a class="white-text" href="?view=citasCanceladasMedicos">Citas Canceladas</a></li>
</ul>
<!--DropMenu-->
<ul id="dropMenu" class="dropdown-content">
    <li><a class="white-text" href="?view=login">Clientes</a></li>
    <li class="divider"></li>
    <li><a class="white-text" href="?view=logMedicos">Medicos</a></li>
</ul>
<nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="dropdown-trigger" data-target="dropMenu" href="#">Iniciar Sesión<i class="material-icons right">arrow_drop_down</i></a></li>
            <li><a href="?view=reportesMedicos">Reportes</a></li>
            <li><a href="?view=citasMedicos" class="dropdown-trigger" data-target="dropMenuCitasMedicos">Citas<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
    </div>
</nav>

<!--BreadCrumb-->
<nav>
    <div class="nav-wrapper">
        <!--HomeMedico-->
        <div class="col s12" id="breadcrumbLogMedicos" style="display: none;">
            <a href="?view=home" class="breadcrumb">Home</a>
            <a href="" class="breadcrumb">Iniciar Sesion</a>
            <a href="?view=login" class="breadcrumb">Login Medicos</a>
        </div>
        <!--Citas pendientes-->
        <div class="col s12" id="breadcrumbCitasPendientesMedicos" style="display: none;">
            <a href="?view=home" class="breadcrumb">Home</a>
            <a href="" class="breadcrumb">Citas</a>
            <a href="?view=citasPendientesMedicos" class="breadcrumb">Citas Pendientes</a>
        </div>
        <!--Citas canceladas-->
        <div class="col s12" id="breadcrumbCitasCanceladasMedicos" style="display: none;">
            <a href="?view=home" class="breadcrumb">Home</a>
            <a href="" class="breadcrumb">Citas</a>
            <a href="?view=citasCanceladasMedicos" class="breadcrumb">Citas Canceladas</a>
        </div>
    </div>
</nav>

<h5 class="hiddenView" id="<?php if ($view) echo $view ?>"></h5>

<script src="./scripts/navbarMedicos.js"></script>