<?php

class Router
{

  private $viewsManager;

  function __construct()
  {
    $this->viewsManager = new ViewsManager();
  }

  function loadView($viewType)
  {
    switch ($viewType) {

        # 1. Registrar el nombre de la URL desde donde se va a acceder
        # 2. Ver ViewsManager.php para el paso 2
        # 3. Llamar método previamente creado en el viewsManager y salir del switch

      case "login":
        $this->viewsManager->loadLogin();
        break;

      case "home":
        $this->viewsManager->loadHome();
        break;

      case "medicos":
        $this->viewsManager->loadMedicos();
        break;

      case "citas":
        $this->viewsManager->loadCitasClientes();
        break;

      case "logMedicos":
        $this->viewsManager->loadLogMedicos();
        break;

      case "citasMedicos":
        $this->viewsManager->loadCitasMedicos();
        break;

      case "reportesMedicos":
        $this->viewsManager->loadReportesMedicos();
        break;

      case "citasPendientesMedicos":
        $this->viewsManager->loadCitasPendientesMedicos();
        break;

      case "citasCanceladasMedicos":
        $this->viewsManager->loadCitasCanceladasMedicos();
        break;

      default:
        $this->viewsManager->loadLogin();
        break;
    }
  }
}
