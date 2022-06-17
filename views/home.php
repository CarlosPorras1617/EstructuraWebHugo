<h1>Home</h1>

<div class="g-recaptcha" data-sitekey="6Lcpg1ogAAAAAIFvFaO7z8aw1k8jxmOEDNg-R0sd" data-callback="verifyCaptcha"></div>
<p id="g-recaptcha-error" style="color: red; display:none;">Esta validación es requerida</p>
<a class="waves-effect waves-light btn" id="submitForm" style="width: 32%;">Enviar</a>

<!--Menu Select-->
<div class="input-field col s12">
    <select id="seleccion">
        <option value="" disabled selected>Escoga una opcion</option>
        <option value="1">Agregar</option>
        <option value="2">Editar</option>
        <option value="3">Eliminar</option>
    </select>
    <label>Seleccione un evento</label>
</div>

<!--Form Editar-->
<div class="container" id="editar" style="display: none;">
    <div class="row center">
        <div class="col s12">
            <div class="input-field col s6">
                <input placeholder="Posicion" id="posicion" type="number" class="validate">
                <label for="posicion">Posicion</label>
            </div>
            <div class="input-field col s6">
                <input placeholder="Texto" id="texto" type="text" class="validate">
                <label for="texto">Texto</label>
            </div>
            <a class="waves-effect waves-light btn" id="botonModificacion">Agregar Modificaciòn</a>
        </div>
    </div>
</div>

<!--Form Agregar-->
<div class="container" id="agregar" style="display: none;">
    <div class="row center">
        <div class="col s12">
            <div class="input-field col s6">
                <input placeholder="Texto" id="textoAgregar" type="text" class="validate">
                <label for="texto">Texto</label>
            </div>
            <a class="waves-effect waves-light btn" id="botonAgregar">Agregar</a>
        </div>
    </div>
</div>

<!--Form Eliminar-->
<div class="container" id="eliminar" style="display: none;">
    <div class="row center">
        <div class="col s12">
            <div class="input-field col s6">
                <input placeholder="Posicion" id="posicionEliminar" type="number" class="validate">
                <label for="posicion">Posicion</label>
            </div>
            <a class="waves-effect waves-light btn" id="botonEliminar">Eliminar</a>
        </div>
    </div>
</div>

<!--Lista elementos-->
<div id="divID">
    <h5>1</h5>
    <h5>2</h5>
    <h5>3</h5>
    <h5>4</h4>
    <h5>5</h5>
    <h5>6</h5>
</div>

<script async src="https://www.google.com/recaptcha/api.js"></script>
<script type="text/javascript" src="./scripts/home.js"></script>