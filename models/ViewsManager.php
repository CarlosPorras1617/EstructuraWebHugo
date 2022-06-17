<?php

/**
*
*/
class ViewsManager
{

  private $head;
  private $fileName;

  function __construct()
  {
    $this->head = new Head();
  }

  function setFileName($fileName) {

    $this->fileName = $fileName;
    if($fileName == "login.php" || $fileName == "home.php" || $fileName == "medicos.php" || $fileName == "citasClientes.php") {
      $this->generateBody();
    } /*else if($fileName == "home.php"){
      $this->generateAdminBody();
    } */else if($fileName == "loginMedico.php"|| $fileName == "citasMedicos.php" || $fileName == "reportesMedicos.php" || $fileName == "citasPendientesMedicos.php" || $fileName == "citasCanceladasMedicos.php"){
      $this->generateAdminBody();
    }


  }

  function generateBody(){
    echo '<header>';
    include './views/navbar.php';
    echo '</header>';
    echo '<body style="background: white;
    width: 100vw;
    height: 100vh;">';
    echo '<div class="container">';
    echo '<div class="row">';
    echo '<div id="main_container" class="col s12">';
    include './views/' . $this->fileName;
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '</body>';
    echo '</html>';
  }

  function generateAdminBody() {
    echo '<body style="background-color: #EEEEEE;">';
    echo '<header>';
    include './views/navbarMedicos.php';
    echo '</header>';
    echo '<main style="background-color: #EEEEEE; ">';
    echo '<div class="container">';
    echo '<div id="main_container" class="col s12">';
    include './views/' . $this->fileName;
    echo '</div>';
    echo '</div>';
    echo '</main>';
    include './views/footer.php';
    echo '</body>';
    echo '</html>';
  }

  # 2. Crear método con nombre loadNombreDeVista
    // Asignar el título del encabezado
    // Asignar el nombre de la vista

  function loadLogin(){
    $this->head->setTitle("Inicio de sesión");
    $this->setFileName("login.php");
  }

  function loadHome(){
    $this->head->setTitle("Dashboard");
    $this->setFileName("home.php");
  }

  function loadMedicos(){
    $this->head->setTitle("Doctores");
    $this->setFileName("medicos.php");
  }

  function loadCitasClientes(){
    $this->head->setTitle("Citas");
    $this->setFileName("citasClientes.php");
  }

  function loadLogMedicos(){
    $this->head->setTitle("Login Medico");
    $this->setFileName("loginMedico.php");
  }

  function loadCitasMedicos(){
    $this->head->setTitle("Citas Medicas");
    $this->setFileName("citasMedicos.php");
  }

  function loadReportesMedicos(){
    $this->head->setTitle("Reportes Medicos");
    $this->setFileName("reportesMedicos.php");
  }

  function loadCitasPendientesMedicos(){
    $this->head->setTitle("Citas Pendientes");
    $this->setFileName("citasPendientesMedicos.php");
  }

  function loadCitasCanceladasMedicos(){
    $this->head->setTitle("Citas Canceladas");
    $this->setFileName("citasCanceladasMedicos.php");
  }
}
?>
