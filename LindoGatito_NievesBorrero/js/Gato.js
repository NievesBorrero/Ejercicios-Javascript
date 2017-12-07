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


function Gato(nombre, raza, peso, mes, anio){
		this.nombre=nombre;
		this.raza=raza;
		this.setPeso(peso);
		this.mes=mes;
		this.anio=anio;
		this.estado='durmiendo'; // El gato se inicia durmiendo.
		this.estaVivo=true;
	}

Gato.prototype.max_peso=15,
Gato.prototype.min_peso=0.5,
Gato.prototype.gordo=10,
Gato.prototype.canijo=3,

Gato.prototype.comer = function(){
	this.comprobarVida();
	if(this.estado!='muerto'){
		this.estado='comiendo';
		this.setPeso(parseFloat(this.peso) +0.5);
		
	}
	
};

//CONTROLAR CON EXCEPCIÓN ESTO Y LO DEMÁS
Gato.prototype.setPeso = function(peso){
		this.peso = peso;
		if(this.peso >= this.gordo && this.estado==='comiendo')
			throw 'El gato está demasiado gordo, juega con él';
		else if(peso <= this.canijo && this.estado==='jugando')
			throw 'El gato está demasiado canijo, necesita comer';
}

Gato.prototype.comprobarVida = function(){
	if(this.peso===this.max_peso||this.peso===this.min_peso){
		this.estado='muerto';
		this.estaVivo = false;
	}
}
Gato.prototype.dormir = function(){
	this.estado='durmiendo';

}
Gato.prototype.jugar = function(){
	this.comprobarVida();
	if(this.estado!='muerto'){
		this.estado='jugando';
		this.setPeso(parseFloat(this.peso) -0.5);
	}
}

Gato.prototype.calcularEdad = function() {
	let fechaActual = new Date();
	let mesActual = fechaActual.getMonth()+1;
	let anioActual = fechaActual.getFullYear();

	let anios = anioActual - this.anio;
	let meses = mesActual - this.mes;

	return anios + ' años y ' + meses + ' meses';
}