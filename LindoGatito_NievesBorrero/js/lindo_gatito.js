/**
* Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). Cada vez que crees un objeto gato aparecerá 
una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). 
El usuario podrá averiguar la edad del gato partiendo de un evento.
    Evita las cajas de texto
    No puedes usar ni alert ni prompt
    Hazlo lo más dinámico posible.
    Utiliza prototype para los métodos
* @author Nieves Borrero
* @version 1.0
*/

{

	let crearVentana = function(){
		let ventana = window.open('./unGato.html','', 'top=0, left=0, width=600, height=920');
		volcarGato(ventana);
	} 

	let volcarGato = function(ventana){
		let gato = dameGato();
		ventana.nuevoGato = gato;
	}

	let dameGato = function(){
		let nombre = document.getElementById("nombre").value;
		let raza = document.getElementById("raza").value;
		let peso = document.getElementById("peso").value;
		let mes = document.getElementById("mes").value;
		let anio = document.getElementById("anio").value;
		return new Gato(nombre, raza, peso, mes, anio);
	}


	document.getElementById("crear").addEventListener("click", crearVentana);
}