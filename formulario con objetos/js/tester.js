/**
* @author Nieves Borrero Barea
* @version 1.0
*/

/**
* Objeto literal para comprobar los inputs del formulario
*/

let tester ={
	// closure
	patrones: {
		nombre: [/[A-Za-z]+/, 'No puede estar vacio'],
		dni: [/^(\d{8})[-\s]?([A-Za-z])$/, 'Ocho dígitos y su letra correspondiente'],
		fecha: [/^(0?[1-9]|[12][0-9]|3[01])[-/](0?[1-9]|1[012])[-/](\d{1,4})$/, 'Formatos válidos: 02/02/02 02-02-02 02-02-2002'],
	    email: [/^[\w-\.]+@([\w]{2,}\.)+([\w-]{2,})$/, 'Formato válido: correo@gamil.com'],
		telf: [/^[6789]\d{8}$/, "Nueve dígitos, empezando por 6, 7, 8 o 9"],
	    url: [/^(http:\/\/)?www\.(\w)*\.(\w){2,3}/, 'Formatos válidos: www.web.es http://www.web.com'],
	    cuenta: [/^(\d{4}[-\s]){2}\d{2}[-\s]\d{10}$/, 'Formato válido: xxxx xxxx xx xxxxxxxxxx (y con - en los espacios)']
	},

	testNombre: function (texto){
		if(this.patrones.nombre[0].test(texto))
			return '';
		return this.patrones.nombre[1]; // Si no coincide, devuelve la cadena con el error
		
	},

	testEmail: function (texto){
		if(this.patrones.email[0].test(texto))
			return '';
		return this.patrones.email[1]; // Si no coincide, devuelve la cadena con el error
		
	},


	testTelf: function (texto){
		if(this.patrones.telf[0].test(texto))
			return '';
		return this.patrones.telf[1]; // Si no coincide, devuelve la cadena con el error
		
	},

	testUrl: function (texto){
		if(this.patrones.url[0].test(texto))
			return '';
		return this.patrones.url[1]; // Si no coincide, devuelve la cadena con el error
		
	},

	testCuenta: function (texto){
		if(this.patrones.cuenta[0].test(texto))
			return '';
		return this.patrones.cuenta[1]; // Si no coincide, devuelve la cadena con el error
		
	},


	testFecha: function (texto){
		if(!this.patrones.fecha[0].test(texto))
			return this.patrones.fecha[1];
		return this.testNewFecha(texto); // Si no coincide, devuelve la cadena con el error
		
	},

	testDni: function(texto){
		if(!this.patrones.dni[0].test(texto))
			return this.patrones.dni[1];
		else
			return this.testLetraDni(texto);
	},

	testLetraDni: function (dni){		
		let match = this.patrones.dni[0].exec(dni);
		let numero = match[1]; // Cojo la parte que corresponde al (ámbito) 1 de la expresión regular
		let letraDni = match[2]; // Cojo el ámbito 2

		numero = numero % 23;
		let letra=  'trwagmyfpdxbnjzsqvhlcket';
		letraValida = letra.substring(numero, numero+1);

		if(letraValida != letraDni.toLowerCase())
			return 'dni erróneo, la letra no coincide ';
		return '';
	},


	testNewFecha: function (fecha){
		fecha = fecha.replace(/[- ]/g, '/');
		let enTrocitos = fecha.split('/');
		let nuevaFecha = new Date (enTrocitos[2], enTrocitos[1], enTrocitos[0]);

		if(nuevaFecha.getMonth()!=enTrocitos[1]/*-1*/) // PREGUNTAR
			return 'Fecha no existe';
		return '';
	}

	
}