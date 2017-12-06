/*
* Formulario siguiendo las pistas
* @author Nieves Borrero
* @version 1.0
*/

// Declaración de controles
let campoDni, campoNombre, campoFecha, campoEmail, campoTelf, campoUrl, campoCuenta, campoCurso, rb1, rb2, rb3, 
	checkJs, checkPhp, checkPy, checkJava, enviar;
// Declaración de errores
let errNombre, errDni, errFecha, errEmail, errTelf, errUrl, errCuenta, errCurso, errGenero, errIntereses, errEnviar;

let nombre = function(input, error){
	let nombre = input.value.trim();
	error.innerHTML = tester.testNombre(nombre);
}

let dni = function (input, error){
	let dni = input.value.trim();
	error.innerHTML = tester.testDni(dni);
}

let fecha = function(input, error){
	let fecha = input.value.trim();
	error.innerHTML = tester.testFecha(fecha);
}

let email = function(input, error){
	let email = input.value.trim();
	error.innerHTML = tester.testEmail(email);
}

let telf = function(input, error){
	let telf = input.value.trim();
	error.innerHTML =tester.testTelf(telf);
}

let url = function(input, error){
	let url = input.value.trim();
	error.innerHTML =tester.testUrl(url);
}

let cuenta = function(input, error){
	let cuenta = input.value.trim();
	error.innerHTML =tester.testCuenta(cuenta);
}

let curso = function(input, error){
	let curso = input.value.trim();
	error.innerHTML = tester.testCurso(curso);
}

let genero = function(input1, input2, input3, error){
	error.innerHTML = tester.testGenero(input1, input2, input3);
}

let intereses = function(input1, input2, input3, input4, error){
	error.innerHTML = tester.testIntereses(input1, input2, input3, input4);
}

let comprobarTodo = function(){
	let primerError = null;
	let msjFecha = tester.testFecha(campoFecha.value.trim());
	let msjDni = tester.testDni(campoDni.value.trim());
	let msjNombre = tester.testNombre(campoNombre.value.trim());
	let msjGenero = tester.testGenero(rb1, rb2, rb3);
	let msjEmail = tester.testEmail(campoEmail.value.trim());
	let msjTelf = tester.testTelf(campoTelf.value.trim());
	let msjUrl = tester.testUrl(campoUrl.value.trim());
	let msjCurso = tester.testCurso(campoCurso.value);
	let msjCuenta = tester.testCuenta(campoCuenta.value.trim());
	let msjIntereses = tester.testIntereses(checkJs, checkPhp, checkPy, checkJava);
	if(msjIntereses!==''){
		errIntereses.innerHTML=msjIntereses;
		primerError = checkJs;
	}
	if(msjCuenta!==''){
		errCuenta.innerHTML=msjCuenta;
		primerError = campoCuenta;
	}
	if(msjCurso!==''){
		errCurso.innerHTML=msjCurso;
		primerError = campoCurso;
	}
	if(msjUrl!==''){
		errUrl.innerHTML=msjUrl;
		primerError = campoUrl;
	}
	if(msjTelf!==''){
		errTelf.innerHTML=msjTelf;
		primerError = campoTelf;
	}
	if(msjEmail!==''){
		errEmail.innerHTML=msjEmail;
		primerError = campoEmail;
	}
	if(msjGenero!==''){
		errGenero.innerHTML=msjGenero;
		primerError = rb1;
	}
	if(msjFecha!==''){
		errFecha.innerHTML=msjFecha;
		primerError = campoFecha;
	}
	if(msjDni!==''){
		errDni.innerHTML= msjDni;
		primerError = campoDni;
	}
	if(msjNombre!==''){
		errNombre.innerHTML = msjNombre;
		primerError = campoNombre;
	}
	if(primerError==null)
		document.location.href="enviado.html";
	else
		primerError.focus();
}


let init = function(){

	// Controles 
	campoDni = document.getElementById('dniInput');
	campoNombre = document.getElementById('nombreInput');
	campoFecha = document.getElementById('fechaInput');
	campoEmail = document.getElementById('emailInput');
	campoTelf = document.getElementById('telfInput');
	campoUrl = document.getElementById('urlInput');
	campoCuenta = document.getElementById('cuentaInput');
	campoCurso = document.getElementById('cursoInput');
	rb1 = document.getElementById('rb1');
	rb2 = document.getElementById('rb2');
	rb3 = document.getElementById('rb3');
	checkJs = document.getElementById('js');
	checkPhp = document.getElementById('php');
	checkPy = document.getElementById('py');
	checkJava = document.getElementById('java');
	enviar = document.getElementById('enviar');

	// Errores

	errNombre = document.getElementById('errNombre');
	errDni = document.getElementById('errDni');
	errFecha = document.getElementById('errFecha');
	errEmail = document.getElementById('errEmail');
	errTelf = document.getElementById('errTelf');
	errUrl = document.getElementById('errUrl');
	errCuenta = document.getElementById('errCuenta');
	errCurso = document.getElementById('errCurso');
	errGenero = document.getElementById('errGenero');
	errIntereses = document.getElementById('errIntereses');
	errEnviar = document.getElementById('errEnviar');

	// Eventos

	campoNombre.addEventListener('blur', nombre.bind(null, campoNombre, errNombre)); // bind me permite pasar argumentos al evento.
	campoDni.addEventListener('blur', dni.bind(null, campoDni, errDni));
	campoFecha.addEventListener('blur', fecha.bind(null, campoFecha, errFecha));
	campoEmail.addEventListener('blur', email.bind(null, campoEmail, errEmail));
	campoTelf.addEventListener('blur', telf.bind(null, campoTelf, errTelf));
	campoUrl.addEventListener('blur', url.bind(null, campoUrl, errUrl));
	campoCuenta.addEventListener('blur', cuenta.bind(null, campoCuenta, errCuenta));
	campoCurso.addEventListener('blur', curso.bind(null, campoCurso, errCurso));
	rb1.addEventListener('blur', genero.bind(null, rb1, rb2, rb3, errGenero));
	rb2.addEventListener('blur', genero.bind(null, rb1, rb2, rb3, errGenero));
	rb3.addEventListener('blur', genero.bind(null, rb1, rb2, rb3, errGenero));
	checkPy.addEventListener('blur', intereses.bind(null, checkJs, checkPhp, checkPy, checkJava, errIntereses));
	enviar.addEventListener('click', comprobarTodo);
}


window.onload = init; // Callback