<?php
$view = $_GET['view'];
?>

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
            <li><a href="?view=home">HomePage</a></li>
            <li><a class="dropdown-trigger" data-target="dropMenu" href="#">Iniciar Sesión<i class="material-icons right">arrow_drop_down</i></a></li>
            <li><a href="?view=medicos">Medicos</a></li>
            <li><a href="?view=citas">Agendar Cita</a></li>
        </ul>
    </div>
</nav>

<!--BreadCrumb-->
<nav>
    <div class="nav-wrapper">
        <!--Home-->
        <div class="col s12" id="breadcrumbHome" style="display: none;">
            <a href="?view=home" class="breadcrumb">Home</a>
        </div>
        <div class="col s12" id="breadcrumbLogin" style="display: none;">
            <a href="?view=home" class="breadcrumb">Home</a>
            <a href="" class="breadcrumb">Iniciar Sesion</a>
            <a href="?view=login" class="breadcrumb">Login Clientes</a>
        </div>
    </div>
</nav>


<h5 class="hiddenView" id="<?php if ($view) echo $view ?>"></h5>


<script src="./scripts/navbar.js"></script>