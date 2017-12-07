/**
* @author Nieves Borrero
* @version 1.0
*/

var foto = document.getElementById("imagen");
let edad = document.getElementById("edad");
let aviso = document.getElementById("aviso");
let btnComer = document.getElementById("comer");
let btnJugar = document.getElementById("jugar");
let btnDormir = document.getElementById("dormir");

window.onload = function(){
	actualizar();
}

let jugar = function(){ 	 
	aviso.innerHTML= '';
 	if(nuevoGato.estaVivo){
 			 try {
				nuevoGato.jugar();
			} catch (e) {
				aviso.innerHTML= e;
 			}
			actualizar();  // QUE NO SIEMPRE CAMBIE LA IMAGEN
			foto.setAttribute("src", "./images/jugando.gif");
			nuevoGato.comprobarVida();
			if(!nuevoGato.estaVivo){
				matar();
			}
		}

 
}

let dormir = function(){
	aviso.innerHTML= '';
	if(nuevoGato.estaVivo){
		nuevoGato.dormir();
		actualizar();
		foto.setAttribute("src", "./images/durmiendo.gif");
	}
}

let comer = function(){
	aviso.innerHTML= '';
 	if(nuevoGato.estaVivo){
						   
			   try {
			   	nuevoGato.comer();
			   } catch (e) {
			   		aviso.innerHTML= e;
			   }
			   
			actualizar();
			foto.setAttribute("src", "./images/comiendo.gif");
			nuevoGato.comprobarVida();
			if(!nuevoGato.estaVivo){
				matar();
			}
		}
 
}

let calcularEdad = function(){
	if(nuevoGato.estaVivo){
		edad.value= nuevoGato.calcularEdad();
	}
}


let matar = function(){
	aviso.innerHTML= '';
	actualizar();
	foto.setAttribute("src", "./images/tumba.jpg");
	InabilitarBotones();

}

let InabilitarBotones = function(){
	btnDormir.setAttribute("disabled", "true");
	btnComer.setAttribute("disabled", "true");
	btnJugar.setAttribute("disabled", "true");
}

function actualizar(){
	document.getElementById("nombre").value = nuevoGato.nombre;
	document.getElementById("raza").value = nuevoGato.raza;
	document.getElementById("peso").value = nuevoGato.peso;
	document.getElementById("estado").value = nuevoGato.estado;
}

document.getElementById("jugar").addEventListener("click", jugar);
document.getElementById("comer").addEventListener("click", comer);
document.getElementById("dormir").addEventListener("click", dormir);
document.getElementById("btnEdad").addEventListener("click", calcularEdad);