/**
* Comprobaciones del formulario
* @author Nieves Borrero
* @version 1.0
*/


const PATTERN_DNI = new RegExp("^\\d{8}[-\\s]?[A-Za-z]$");
const PATTERN_NOMBRE = new RegExp("[A-Za-z]+");
const PATTERN_FECHA = new RegExp("^(0?[1-9]|[12][0-9]|3[01])[-/](0?[1-9]|1[012])[-/](\\d{1,4})$");
const PATTERN_EMAIL = new RegExp("^[\\w-\\.]+@([\\w]{2,}\\.)+([\\w-]{2,})$");
const PATTERN_TELF = new RegExp("^[6789]\\d{8}$");
const PATTERN_URL= new RegExp("^(http://)?www\\.(\\w)*\\.(\\w){2,3}");
const PATTERN_CUENTA= new RegExp("^(\\d{4}[-\\s]){2}\\d{2}[-\\s]\\d{10}$");

/**
* Comprueba si el valor del campo coincide con el patrón indicado
*/
let comprobarPatron = function(campo,pattern){
	 if (!pattern.test(campo))
		return false; 
	 return true;
}

let comprobarCurso = function(){
	if(campoCurso.value=='1ASIR'||campoCurso.value=='1DAW'||campoCurso.value=='2ASIR'||campoCurso.value=='2DAW')
		return true;
	return false;
}

let comprobarGenero = function(){
	if(rb1.checked || rb2.checked || rb3.checked)
		return true;
	return false;
}

let comprobarIntereses = function(){
	if(checkJs.checked||checkJava.checked||checkPy.checked||checkPhp.checked)
		return true;
	return false;
}


let comprobarDni = function(dni){
	let numeros = parseInt(dni.slice(0,8)); // Cortamos la cadena del índice 0 al 8 (la parte de números del dni)
	let letra = dni.charAt(dni.length-1).toLowerCase();
	let letras = ['t','r','w','a','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','e'];
	let letraCorrecta = letras[numeros%23];

	if(campoVacio(dni))
		return false
	if(PATTERN_DNI.test(dni))		
		return letra==letraCorrecta;
	else
		return false; // Para que no me devuelva undefined
}

let comprobarFecha = function(campo){
	let fecha = new Date(campo);
	if(fecha=='Invalid Date')
		return false;
	return true;
}

let campoVacio = function(campo){
	if(campo.value == "" )
		return true;
	return false;
}