/**
* Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares.
Asegúrate de validar lo siguiente:

    Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
    Tipo de dato introducido (numérico...)
    Dirección de correo válida
    Número de DNI válido
    Fecha válida
    Número de teléfono
    Número de cuenta corriente
    URL

Asegúrate de que:

    Al perder el foco de cada control se comprueba su validación.
    Los errores los muestras mediante css.
    Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.

Procura aislar las validaciones del interfaz del usuario (arquitectura de tres capas)

* @author Nieves Borrero
* @version 1.0
*/

let campoDni = document.getElementById('dniInput');
let campoNombre = document.getElementById('nombreInput');
let campoFecha = document.getElementById('fechaInput');
let campoEmail = document.getElementById('emailInput');
let campoTelf = document.getElementById('telfInput');
let campoUrl = document.getElementById('urlInput');
let campoCuenta = document.getElementById('cuentaInput');
let campoCurso = document.getElementById('cursoInput');
let rb1 = document.getElementById('rb1');
let rb2 = document.getElementById('rb2');
let rb3 = document.getElementById('rb3');
let checkJs = document.getElementById('js');
let checkPhp = document.getElementById('php');
let checkPy = document.getElementById('py');
let checkJava = document.getElementById('java');
let labelCurso = document.getElementById('labelCurso');
let labelIntereses = document.getElementById('labelIntereses');
let enviar = document.getElementById('enviar');
let enviado = document.getElementById('enviado');


let comprobarFormulario = function(event){

	let primerError = null;

	if(!comprobarIntereses()){		
		primerError = checkJs;
		setLetras(labelIntereses, 'rojo');
	}
	if(!comprobarPatron(campoCuenta.value,PATTERN_CUENTA)){		
		primerError = campoCuenta;
		setBorde(campoCuenta, 'rojo');
	}
	if(!comprobarCurso()){		
		primerError = campoCurso;
		setLetras(labelCurso, 'rojo');
	}
	if(!comprobarPatron(campoUrl.value,PATTERN_URL)){
		primerError = campoUrl;
		setBorde(campoUrl, 'rojo');
	}
	if(!comprobarPatron(campoTelf.value,PATTERN_TELF)){		
		primerError = campoTelf;
		setBorde(campoTelf, 'rojo');	
	}
	if(!comprobarPatron(campoEmail.value,PATTERN_EMAIL)){		
		primerError = campoEmail;
		setBorde(campoEmail,'rojo');
	}
	if(!comprobarGenero()){		
		primerError = rb1;
		setLetras(labelGenero, 'rojo');
	}
	if(!comprobarPatron(campoFecha.value,PATTERN_FECHA)){		
		primerError = campoFecha;
		setBorde(campoFecha,'rojo');
	}
	if(!comprobarPatron(campoDni.value,PATTERN_DNI)){		
		primerError = campoDni;
		setBorde(campoDni,'rojo');
	}
	if(!comprobarPatron(campoNombre.value,PATTERN_NOMBRE)){
		primerError = campoNombre;
		setBorde(campoNombre, 'rojo');
	}
	if(primerError == null)
		document.location.href="enviado.html";
	else 
		primerError.focus();
	}


/**
* Controla la validez del campo y lo señala en caso de error
*/
let comprobarInput = function(tipo, campo) {
	let inputCorrecto=true;
	let correcto=true;
	
		switch(tipo) {
			case 'dni':
				inputCorrecto=comprobarPatron(campo.value,PATTERN_DNI);
				break;
			case 'nombre':
				inputCorrecto=comprobarPatron(campo.value,PATTERN_NOMBRE);break;
			case 'fecha':
				inputCorrecto=comprobarPatron(campo.value,PATTERN_FECHA);break;
			case 'email':
				inputCorrecto=comprobarPatron(campo.value,PATTERN_EMAIL);break;
			case 'telf':
				inputCorrecto=comprobarPatron(campo.value,PATTERN_TELF);break;
			case 'url':
				inputCorrecto=comprobarPatron(campo.value,PATTERN_URL);break;
			case 'cuenta':
				inputCorrecto=comprobarPatron(campo.value,PATTERN_CUENTA);break;
			case 'curso':
				correcto=comprobarCurso();break;
			case 'intereses':
				correcto=comprobarIntereses();break;
			case 'genero':
				correcto=comprobarGenero();break;
		}
		if(inputCorrecto)
			setBorde(campo, 'negro');
		else
			setBorde(campo,'rojo');
		if(!correcto)
			setLetras(campo, 'rojo');
		else
			setLetras(campo, 'negro');	
		
}


campoNombre.addEventListener('blur', function() {comprobarInput('nombre', campoNombre)});
campoDni.addEventListener('blur', function() {comprobarInput('dni', campoDni)});
campoFecha.addEventListener('blur', function() {comprobarInput('fecha', campoFecha)});
campoEmail.addEventListener('blur', function() {comprobarInput('email', campoEmail)});
campoTelf.addEventListener('blur', function() {comprobarInput('telf', campoTelf)});
campoUrl.addEventListener('blur', function() {comprobarInput('url', campoUrl)});
campoCuenta.addEventListener('blur', function() {comprobarInput('cuenta', campoCuenta)});
campoCurso.addEventListener('blur', function(){comprobarInput('curso', labelCurso)});
checkPy.addEventListener('blur', function(){comprobarInput('intereses', labelIntereses)});
rb1.addEventListener('blur', function(){comprobarInput('genero', labelGenero)});
rb2.addEventListener('blur', function(){comprobarInput('genero', labelGenero)});
rb3.addEventListener('blur', function(){comprobarInput('genero', labelGenero)});
enviar.addEventListener('click', comprobarFormulario);