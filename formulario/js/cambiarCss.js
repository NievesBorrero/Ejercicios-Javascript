/**
* Modificaciones en el css
* @author Nieves Borrero
* @version 1.0
*/

/**
* Cambia el color del borde según haya o no error
*/
let setBorde = function(input, color) {
	if(color=='rojo')
		input.style.borderColor ='red';
	else
		input.style.borderColor='black';
}

/**
* Cambia el color del label según haya o no error
*/
let setLetras = function(label, color){
	if(color=='rojo')
		label.style.color ='red';
	else
		label.style.color='black';
}